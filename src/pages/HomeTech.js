import { Container, Row, Col, Button } from "react-bootstrap";
import technicianSVG from "../assets/manager1.svg"; // Assurez-vous d'avoir une image adaptée

function HomeTech() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: "80vh", backgroundColor: "#fff" }}>
      <Row className="w-75">
        
        {/* Colonne gauche - Texte */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h1 className="fw-bold" style={{ fontSize: "22px" }}>Bienvenue sur votre espace technicien</h1>
          <br />
          <p className="text-muted">
          <i style={{fontWeight:"bold" ,color:"black"}}> Mr. Dethie Sarr </i>
            <br />
            <br />
            Consultez les pannes qui vous sont assignées, effectuez les réparations et soumettez vos rapports d’intervention.
          </p>
          <ul className="list-unstyled" style={{ color: "#108b31" }}>
            <li>🛠 Recevez les pannes à résoudre en temps réel</li>
            <br />
            <li>📋 Rédigez et soumettez vos rapports d'intervention</li>
            <br />
            <li>✅ Mettez à jour le statut des pannes résolues</li>
          </ul>
          <Button variant="success" className="mt-3"></Button>
        </Col>

        {/* Colonne droite - Image */}
        <Col md={6} className="text-center">
          <img 
            src={technicianSVG} 
            alt="Illustration Technicien"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </Col>

      </Row>
    </Container>
  );
}

export default HomeTech;
