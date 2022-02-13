import './App.css';

import {Container,Row, Col, Alert, Button,Breadcrumb,BreadcrumbItem,Card,Form}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Container fluid className="App">
      <header className="App-header">
      <Form style={{backgroundColor:"#ffff",borderRadius:"5px",marginBottom:"20px"}}>
        <Row>
<Col>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  </Col>
<Col>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </Col>

  </Row>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      <Card style={{color:"black"}}>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Img style={{height:"150px"}} src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js="></Card.Img>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        
      <Breadcrumb>
      <BreadcrumbItem>Test</BreadcrumbItem>
      <BreadcrumbItem>Test2</BreadcrumbItem>
      <BreadcrumbItem>Test3</BreadcrumbItem>


      </Breadcrumb>
      <Alert  variant='danger'>Alert</Alert>
        <Button>Test</Button>


      </header>
    </Container>
  );
}

export default App;
