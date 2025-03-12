import { useState } from "react";
import { Button, Snackbar, Stack, TextField, Typography, Paper, Box } from "@mui/material";
import { SERVER_URL } from "../constant";
import PageGestion from "./PageGestion";
// import HomePage from "./HomePage";

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
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>Authentification</Typography>
                <Stack spacing={2} mt={2}>
                    <TextField name="username" label="Username" onChange={handleChange} fullWidth />
                    <TextField type="password" name="password" label="Password" onChange={handleChange} fullWidth />
                    <Button variant="contained" color="primary" onClick={login} fullWidth>
                        Login
                    </Button>
                </Stack>
            </Paper>
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message={errorMessage} />
        </Box>
    );
}

export default Login;
