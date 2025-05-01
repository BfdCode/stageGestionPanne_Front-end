import { useState } from "react";
import { Button, Snackbar, Stack, TextField, Typography, Paper, Box, MenuItem } from "@mui/material";
import { SERVER_URL } from "../constant";
import { Container } from "react-bootstrap";
import registerSVG from "../assets/register.svg"; // Image d'illustration

function Inscription() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
        username: "",
        password: "",
        nom: "",
        prenom: "",
        email: "",
        role: "Utilisateur simple", // Rôle fixe
    });

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const register = async () => {
        try {
            const response = await fetch(SERVER_URL + "register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                setMessage("Inscription réussie ! Vous pouvez vous connecter.");
            } else {
                setMessage("Échec de l'inscription. Veuillez réessayer.");
            }
            setOpen(true);
        } catch (err) {
            console.error("Erreur d'inscription:", err);
            setMessage("Une erreur est survenue. Vérifiez votre connexion.");
            setOpen(true);
        }
    };

    return (
        <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: "100vh", backgroundColor: "#fff" }}>
            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                <Paper elevation={4} sx={{ padding: 5, width: "450px", textAlign: "center" }}>
                    
                    {/* IMAGE D'ILLUSTRATION */}
                    <img 
                        src={registerSVG} 
                        alt="Illustration d'inscription" 
                        className="img-fluid"
                        style={{ maxWidth: "150px", marginBottom: "20px" }}
                    />

                    <Typography variant="h4" gutterBottom>
                        Inscription
                    </Typography>
                    
                    <Stack spacing={2} mt={3}>
                        <TextField name="nom" label="Nom" onChange={handleChange} fullWidth required />
                        <TextField name="prenom" label="Prénom" onChange={handleChange} fullWidth required />
                        <TextField name="email" label="Email" type="email" onChange={handleChange} fullWidth required />
                        <TextField name="username" label="Nom d'utilisateur" onChange={handleChange} fullWidth required />
                        <TextField type="password" name="password" label="Mot de passe" onChange={handleChange} fullWidth required />
                        
                        {/* Rôle (fixe) */}
                        <TextField
                            name="role"
                            label="Rôle"
                            value="Utilisateur simple"
                            fullWidth
                            disabled
                            select
                        >
                            <MenuItem value="Utilisateur simple">Utilisateur simple</MenuItem>
                        </TextField>

                        <Button 
                            variant="contained" 
                            sx={{ backgroundColor: "#108b31", padding: "12px", fontSize: "16px" }} 
                            onClick={register} 
                            fullWidth
                        >
                            S'inscrire
                        </Button>
                    </Stack>
                </Paper>
            </Box>

            {/* Snackbar - Message de retour */}
            <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)} message={message} />
        </Container>
    );
}

export default Inscription;
