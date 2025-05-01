import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton, TextField, Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const UsersTable = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: "max", lastName: "niang", email: "niang@email.com", address: "pikine" },
    { id: 2, firstName: "dogo", lastName: "thiam", email: "thiamn@email.com", address: "yeummbeul" },
    { id: 3, firstName: "babacar", lastName: "sarr", email: "babs@email.com", address: "kaniala" },
  ]);

  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", address: "" });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewUser({ firstName: "", lastName: "", email: "", address: "" });
  };

  const handleAddUser = () => {
    if (!newUser.firstName || !newUser.lastName || !newUser.email) return;
    setUsers([...users, { ...newUser, id: Date.now() }]);
    handleClose();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const columns = [
    { field: "firstName", headerName: "Prénom", flex: 1 },
    { field: "lastName", headerName: "Nom", flex: 1 },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "address", headerName: "Adresse", flex: 2 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box p={3} sx={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={handleOpen}>
          Assigner Pannes
        </Button>
      </Box>

      <DataGrid autoHeight rows={users} columns={columns} checkboxSelection pageSizeOptions={[5, 10, 20]} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un utilisateur</DialogTitle>
        <DialogContent>
          <TextField label="Prénom" fullWidth margin="dense" value={newUser.firstName} onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} />
          <TextField label="Nom" fullWidth margin="dense" value={newUser.lastName} onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} />
          <TextField label="Email" fullWidth margin="dense" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
          <TextField label="Adresse" fullWidth margin="dense" value={newUser.address} onChange={(e) => setNewUser({ ...newUser, address: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Annuler</Button>
          <Button onClick={handleAddUser} color="success">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UsersTable;
