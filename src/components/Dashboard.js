import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const Dashboard = () => {
  const [stats, setStats] = useState({
    categories: [
      { category: "Électroménager", count: 0 },
      { category: "Électronique", count: 0 },
      { category: "Électricité", count: 0 },
      { category: "Plomberie", count: 0 },
      { category: "Menuiserie", count: 0 },
      { category: "Connexion", count: 0 },
    ],
    status: {
      active: 0,
      resolved: 0,
      pending: 0,
      urgent: 0,
    },
    evolution: [
      {jour: "1", count: 0 },
      {jour: "2", count: 0 },
      {jour: "3", count: 0 },
      {jour: "4", count: 0 },
      {jour: "5", count: 0 },
      {jour: "6", count: 0 },
      {jour: "7", count: 0 },
    ],
  });

  return (
    <Box p={3}>
      {/* Statistiques des pannes */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Card sx={{ flex: 1, mx: 1, textAlign: "center", bgcolor: "#c9f2cb" }}>
          <CardContent>
            <WarningIcon fontSize="large" color="error" />
            <Typography variant="h6">Actives</Typography>
            <Typography variant="h4">{stats.status.active}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, mx: 1, textAlign: "center", bgcolor: "#c9f2cb" }}>
          <CardContent>
            <CheckCircleIcon fontSize="large" color="success" />
            <Typography variant="h6">Résolues</Typography>
            <Typography variant="h4">{stats.status.resolved}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, mx: 1, textAlign: "center", bgcolor: "#c9f2cb" }}>
          <CardContent>
            <HourglassEmptyIcon fontSize="large" color="warning" />
            <Typography variant="h6">En attente</Typography>
            <Typography variant="h4">{stats.status.pending}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, mx: 1, textAlign: "center", bgcolor: "#c9f2cb" }}>
          <CardContent>
            <ReportProblemIcon fontSize="large" color="error" />
            <Typography variant="h6">Urgentes</Typography>
            <Typography variant="h4">{stats.status.urgent}</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Diagrammes */}
      <Box display="flex" justifyContent="space-between">
        <Card sx={{ flex: 1, mx: 1, p: 2 }}>
          <Typography variant="h6" align="center">Pannes par catégorie</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.categories}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="count" fill="#47b549" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card sx={{ flex: 1, mx: 1, p: 2 }}>
          <Typography variant="h6" align="center">Évolution des pannes</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.evolution}>
              <XAxis dataKey="jour" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="count" stroke="#47b549" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
