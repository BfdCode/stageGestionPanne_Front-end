import { Col, Container, Row } from "react-bootstrap";

function HomePage() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="w-100">
        <Col className="text-center">
          <h1>Bienvenue sur la page d'accueil</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;