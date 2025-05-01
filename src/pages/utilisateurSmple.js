import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const UtilisateurSmple = () => {
const [users, setUsers] = useState([]);

  const columns = [
    { field: "prenom", headerName: "Prénom", flex: 1 },
    { field: "nom", headerName: "Nom", flex: 1 },
    { field: "matricule", headerName: "Identifiant", flex: 2 },
    { field: "role", headerName: "Rôle", flex: 1 },
  ];

  return (
   <>
   <br></br>
   <Box p={3} sx={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
      <DataGrid autoHeight rows={users} columns={columns} pageSizeOptions={[5, 10, 20]} />
    </Box>
   </>
  );
};

export default UtilisateurSmple ;