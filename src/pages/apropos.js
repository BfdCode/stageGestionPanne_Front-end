import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import InfoIcon from "@mui/icons-material/Info";
import SupportIcon from "@mui/icons-material/Support";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Apropos = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="fw-bold">
            <InfoIcon fontSize="large" /> À propos de notre application
          </h1>
          <p className="text-muted">
            Notre plateforme simplifie la gestion des pannes en facilitant la communication entre les utilisateurs, les techniciens et les gestionnaires.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Fonctionnalité 1 */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="text-center shadow-sm p-3">
            <BuildIcon fontSize="large" color="primary" />
            <Card.Body>
              <Card.Title>Gestion des pannes</Card.Title>
              <Card.Text>
                Les utilisateurs signalent facilement des pannes et suivent leur évolution en temps réel.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Fonctionnalité 2 */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="text-center shadow-sm p-3">
            <SupportIcon fontSize="large" color="success" />
            <Card.Body>
              <Card.Title>Techniciens spécialisés</Card.Title>
              <Card.Text>
                Chaque panne est assignée à un technicien compétent pour une intervention rapide et efficace.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Fonctionnalité 3 */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="text-center shadow-sm p-3">
            <CheckCircleIcon fontSize="large" color="error" />
            <Card.Body>
              <Card.Title>Suivi et Résolution</Card.Title>
              <Card.Text>
                Le gestionnaire et les utilisateurs peuvent voir le statut des pannes (en attente, en cours, résolues).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <p className="text-muted">
            🚀 Notre objectif est de rendre la gestion des pannes plus fluide et efficace.  
            <br /> Une question ? Un problème ? Contactez-nous !
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Apropos;
