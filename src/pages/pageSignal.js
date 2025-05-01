import React, { useState } from "react";
import { TextField, Button, MenuItem, Box, Typography, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const PageSignal = () => {
  const [issue, setIssue] = useState({
    category: "",
    description: "",
    priority: "",
    location: "",
    photos: [],
  });

  const [reportedIssues, setReportedIssues] = useState([]);
  const [openDialog, setOpenDialog] = useState(false); // État pour ouvrir/fermer le formulaire de signalisation
  const categories = ["Électricité", "Plomberie", "Informatique", "Autre"];
  const priorities = ["Bas", "Moyen", "Élevé"];

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setIssue({ ...issue, photos: files });
  };

  const handleChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIssue = { ...issue, status: "En attente", id: Date.now() };
    setReportedIssues([...reportedIssues, newIssue]);
    setIssue({ category: "", description: "", priority: "", location: "", photos: [] });
    setOpenDialog(false); // Fermer le formulaire après soumission
  };

  const handleAcceptIssue = (id) => {
    setReportedIssues(reportedIssues.map(issue => 
      issue.id === id ? { ...issue, status: "Acceptée" } : issue
    ));
  };

  return (

    <>
    <br></br>
    <br></br>
    <Box p={3} sx={{ maxWidth: 960, margin: "auto", backgroundColor: "#f8f9fa", borderRadius: "8px", boxShadow: 2 }}>
      {/* Bouton Signaler une panne */}
      <Button variant="contained" color="primary" fullWidth sx={{ mb: 3,backgroundColor:"green",width:"200px"}} onClick={() => setOpenDialog(true)}>
        Signaler une Panne
      </Button>
         <br></br>
         <br></br>
      {/* Tableau des pannes signalées */}
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Catégorie</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Priorité</TableCell>
              <TableCell>Localisation</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportedIssues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell>{issue.category}</TableCell>
                <TableCell>{issue.description}</TableCell>
                <TableCell>{issue.priority}</TableCell>
                <TableCell>{issue.location}</TableCell>
                <TableCell>{issue.status}</TableCell>
                <TableCell>
                  {issue.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Formulaire pour signaler une panne (Dialog) */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Signaler une Panne</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Catégorie</InputLabel>
            <Select name="category" value={issue.category} onChange={handleChange}>
              {categories.map((cat, index) => (
                <MenuItem key={index} value={cat}>{cat}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            name="description"
            label="Description"
            multiline
            rows={3}
            fullWidth
            margin="normal"
            value={issue.description}
            onChange={handleChange}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Priorité</InputLabel>
            <Select name="priority" value={issue.priority} onChange={handleChange}>
              {priorities.map((level, index) => (
                <MenuItem key={index} value={level}>{level}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            name="location"
            label="Localisation"
            fullWidth
            margin="normal"
            value={issue.location}
            onChange={handleChange}
          />

          <Button variant="contained" component="label" fullWidth sx={{ mt: 2,backgroundColor:"gray" }}>
            Joindre des Photos
            <input type="file" multiple hidden onChange={handleFileChange} />
          </Button>

          {issue.photos.length > 0 && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              {issue.photos.length} fichier(s) sélectionné(s)
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="error">Annuler</Button>
          <Button onClick={handleSubmit} color="success">Envoyer</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </>
  );
};

export default PageSignal;
