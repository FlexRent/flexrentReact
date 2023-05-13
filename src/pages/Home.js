import CustomNavbar from "./CustomNavbar";
import {Carousel} from 'react-bootstrap';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import Footer from "./Footer";
import Ferramentas from "../assets/images/ferramentas.jpeg"
import Camping from "../assets/images/camping.jpeg"
import Praia from "../assets/images/praia.jpeg"
import Esportes from "../assets/images/esportes.jpeg"
import Testimonials from "./Comments";


const products = [
  {
    id: 1,
    name: "Barraca de camping",
    price: 150.0,
    image: "https://via.placeholder.com/150",
    description: "Barraca para até 4 pessoas",
  },
  {
    id: 2,
    name: "Saco de dormir",
    price: 80.0,
    image: "https://via.placeholder.com/150",
    description: "Saco de dormir ",
  },
  {
    id: 3,
    name: "Fogareiro",
    price: 50.0,
    image: "https://via.placeholder.com/150",
    description: "Fogareiro portátil para cozinhar",
  },

  {
    id: 4,
    name: "Lanterna",
    price: 10.0,
    image: "https://via.placeholder.com/150",
    description: "Lanterna",
  },
];


export default function Home(){
    
    return(
        <>
            <CustomNavbar/>
   

    <div className="d-flex justify-content-center align-items-center my-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block "
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Container>  
    <div className="jumbotron jumbotron-fluid">
        <div className="container ">
          <h1 className=" mt-5 mb-4">Categorias</h1>
        </div>
      </div>
    <Row xs={1} sm={2} md={4} className="g-4">
      <Col>
        <Card >
          <Card.Img variant="top" src={Ferramentas} />
          <Card.Body>
            <Card.Title className="text-center">Ferramentas</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={Camping} />
          <Card.Body>
            <Card.Title className="text-center">Camping</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={Praia} />
          <Card.Body>
            <Card.Title className="text-center">Praia</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={Esportes}/>
          <Card.Body>
            <Card.Title className="text-center">Esportes</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>  

    <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-5 mt-5 mb-4">Produtos em Destaque</h1>
        </div>
      </div>

      <Container>
        <Row className="mb-5">
          {products.map((product) => (
            <Col key={product.id} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


    <Testimonials/>
      
    

        <Footer/>   
         
        </>

        
    );
}