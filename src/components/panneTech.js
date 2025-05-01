// import React, { useState, useEffect } from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip } from "@mui/material";
// import { SERVER_URL } from "../constant";

// const PannesTechnicien = () => {
//   const [pannes, setPannes] = useState([]);

//   useEffect(() => {
//     fetchPannes();
//   }, []);

//   const fetchPannes = async () => {
//     try {
//       const token = sessionStorage.getItem("jwt"); // Récupération du token JWT
//       const response = await fetch(`${SERVER_URL}pannes/technicien`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setPannes(data);
//       } else {
//         console.error("Erreur lors de la récupération des pannes.");
//       }
//     } catch (error) {
//       console.error("Erreur de connexion au serveur:", error);
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "En attente":
//         return "warning";
//       case "En cours":
//         return "primary";
//       case "Résolue":
//         return "success";
//       case "Urgente":
//         return "error";
//       default:
//         return "default";
//     }
//   };

//   return (
//     <TableContainer component={Paper} sx={{ mt: 4, p: 2 }}>
//       <Table>
//         <TableHead>
//           <TableRow sx={{ background: "#108b31", color: "#fff" }}>
//             <TableCell sx={{ color: "#fff" }}>ID</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Description</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Catégorie</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Urgence</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Statut</TableCell>
//             <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {pannes.length > 0 ? (
//             pannes.map((panne) => (
//               <TableRow key={panne.id}>
//                 <TableCell>{panne.id}</TableCell>
//                 <TableCell>{panne.description}</TableCell>
//                 <TableCell>{panne.categorie}</TableCell>
//                 <TableCell>
//                   <Chip label={panne.urgence} color={panne.urgence === "Élevée" ? "error" : "default"} />
//                 </TableCell>
//                 <TableCell>
//                   <Chip label={panne.statut} color={getStatusColor(panne.statut)} />
//                 </TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
//                     Détails
//                   </Button>
//                   <Button variant="contained" color="success" size="small">
//                     Ajouter Rapport
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={6} align="center">
//                 Aucune panne trouvée.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default PannesTechnicien;

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip } from "@mui/material";

const PannesTechnicien = () => {
  const [pannes, setPannes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de chargement comme une requête API
    setTimeout(() => {
      const fakeData = [
        { id: 1, description: "Panne Internet", categorie: "Connexion", urgence: "Élevée", statut: "En attente" },
        { id: 2, description: "Problème électrique", categorie: "Électricité", urgence: "Moyenne", statut: "En cours" },
        { id: 3, description: "Fuite d'eau", categorie: "Plomberie", urgence: "Élevée", statut: "Résolue" },
        { id: 4, description: "Machine à laver en panne", categorie: "Électroménager", urgence: "Basse", statut: "En attente" },
      ];
      setPannes(fakeData);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "En attente":
        return "warning";
      case "En cours":
        return "primary";
      case "Résolue":
        return "success";
      case "Urgente":
        return "error";
      default:
        return "default";
    }
  };

  return (
  <>
  <br></br><br></br>
   <h3 className="text-center">  📋 La Liste des Pannes assignées</h3>
  <br></br>
    <TableContainer component={Paper} sx={{ mt: 4, p: 2 }}>
      <Table>
        <TableHead>
          <TableRow sx={{  color: "#000" }}>
            <TableCell sx={{ color: "#000" }}>ID</TableCell>
            <TableCell sx={{ color: "#000" }}>Description</TableCell>
            <TableCell sx={{ color: "#000" }}>Catégorie</TableCell>
            <TableCell sx={{ color: "#000" }}>Urgence</TableCell>
            <TableCell sx={{ color: "#000" }}>Statut</TableCell>
            <TableCell sx={{ color: "#000" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
                Chargement des pannes...
              </TableCell>
            </TableRow>
          ) : pannes.length > 0 ? (
            pannes.map((panne) => (
              <TableRow key={panne.id}>
                <TableCell>{panne.id}</TableCell>
                <TableCell>{panne.description}</TableCell>
                <TableCell>{panne.categorie}</TableCell>
                <TableCell>
                  <Chip label={panne.urgence} color={panne.urgence === "Élevée" ? "error" : "default"} />
                </TableCell>
                <TableCell>
                  <Chip label={panne.statut} color={getStatusColor(panne.statut)} />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                    Détails
                  </Button>
                  <Button variant="contained" color="success" size="small">
                    facturation
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                Aucune panne trouvée.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
};

export default PannesTechnicien;

