import { Container, Row, Col, Button } from "react-bootstrap";
import managerSVG from "../assets/manager2.svg"; // Assurez-vous d'avoir une image adaptée

function Homegestion() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: "80vh", backgroundColor: "#fff" }}>
      <Row className="w-75">
        
        {/* Colonne gauche - Texte */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h1 className="fw-bold" style={{ fontSize: "22px" }}>Bienvenue sur votre espace de gestion</h1>
          <br />
          <p className="text-muted">
            <i style={{fontWeight:"bold" ,color:"black"}}> Mr.Babacar SARR </i>
            <br />
            <br />
            Gérez les pannes efficacement en assignant les techniciens et en assurant un suivi en temps réel.  
          </p>
          <ul className="list-unstyled" style={{ color: "#108b31" }}>
            <li>📌 Assignez les pannes aux techniciens spécialisés</li>
            <br />
            <li>📊 Suivez l'évolution des réparations en temps réel</li>
            <br />
            <li>🔧 Gérez les techniciens et leurs interventions</li>
          </ul>
          <Button variant="success" className="mt-3"></Button>
        </Col>

        {/* Colonne droite - Image */}
        <Col md={6} className="text-center">
          <img 
            src={managerSVG} 
            alt="Illustration Gestionnaire"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </Col>

      </Row>
    </Container>
  );
}

export default Homegestion;
