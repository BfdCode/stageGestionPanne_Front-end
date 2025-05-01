import { Container, Row, Col, Button } from "react-bootstrap";
import developerSVG from "../assets/dev3.svg";
function HomePage() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: "80vh", backgroundColor: "#fff" }}>
      <Row className="w-75">
        {/* Colonne gauche - Texte */}
        <Col md={6} className="d-flex flex-column justify-content-center">
        <h1 className="fw-bold" style={{fontSize:"20px"}}>Bienvenue sur la plateforme de gestion des pannes</h1>
        <br></br>
          <p className="text-muted">
            Signalez, suivez et gérez vos pannes en toute simplicité. Un service rapide et efficace pour tous vos besoins techniques.
          </p>
          <ul className="list-unstyled" style={{color:"#108b31"}}>
            <li> Déclarez une panne en quelques clics</li>
            <br></br>
            <li> Suivez l'évolution de vos signalements</li>
            <br></br>
            <li> Assistance technique 24h/24 et 7j/7</li>
          </ul>
          <Button variant="success" className="mt-3"></Button>
        </Col>

        {/* Colonne droite - Image */}
        <Col md={6} className="text-center">
            <img 
            src={developerSVG} 
            alt="Illustration"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
            />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
