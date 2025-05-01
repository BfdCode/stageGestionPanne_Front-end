import { useState } from "react";
import { Button, Snackbar, Stack, TextField, Typography, Paper, Box } from "@mui/material";
import { SERVER_URL } from "../constant";
import PageGestion from "./PageGestion";
import { Container } from "react-bootstrap";
import developerSVG from "../assets/login1.svg";

function Login({ onLogin }) {
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [utilisateur, setUtilisateur] = useState({ username: "", password: "" });

    const handleChange = (event) => {
        setUtilisateur({ ...utilisateur, [event.target.name]: event.target.value });
    };

    const login = async () => {
        try {
            const response = await fetch(SERVER_URL + "login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(utilisateur),
            });

            if (!response.ok) {
                setErrorMessage("Login failed: Vérifiez votre username et password");
                setOpen(true);
                return;
            }

            const jwtToken = response.headers.get("Authorization");

            if (jwtToken) {
                sessionStorage.setItem("jwt", jwtToken);
                if (onLogin) {
                    onLogin();
                }
            } else {
                setErrorMessage("Login échoué: Aucun token reçu");
                setOpen(true);
            }
        } catch (err) {
            console.error("Erreur lors de l'authentification:", err);
            setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
            setOpen(true);
        }
    };

    if (sessionStorage.getItem("jwt")) {
        return <PageGestion />;
    }

    return (
        <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: "100vh", backgroundColor: "#fff" }}>
            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                <Paper elevation={4} sx={{ padding: 5, width: "450px", textAlign: "center" }}>
                    
                    {/* IMAGE À L'INTÉRIEUR DU FORMULAIRE */}
                    <img 
                        src={developerSVG} 
                        alt="Illustration" 
                        className="img-fluid"
                        style={{ maxWidth: "150px", marginBottom: "20px" }} // Taille réduite + espacement
                    />
                    
                    <Typography variant="h4" gutterBottom>
                        Authentification
                    </Typography>
                    
                    <Stack spacing={3} mt={3}>
                        <TextField name="username" label="Nom d'utilisateur" onChange={handleChange} fullWidth />
                        <TextField type="password" name="password" label="Mot de passe" onChange={handleChange} fullWidth />
                        <Button 
                            variant="contained" 
                            sx={{ backgroundColor: "#108b31", padding: "12px", fontSize: "16px" }} 
                            onClick={login} 
                            fullWidth
                        >
                            Se connecter
                        </Button>
                    </Stack>
                </Paper>
            </Box>

            {/* Snackbar - Message d'erreur */}
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message={errorMessage} />
        </Container>
    );
}

export default Login;
