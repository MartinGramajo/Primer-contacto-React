import './about.css'
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";


export default function About() {
    return (
        <div>
            <Container className="mt-5 p-3">
                <Row className="mw-100">
                    <Col xs={6} md={4} className="text-center" >
                        <Image className="about" src="https://www.dafont.com/img/illustration/p/a/passionate.png" roundedCircle />
                        <h2> Passionate</h2>
                        <p> Each project starts with an in-depth to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                    </Col>
                    <Col xs={6} md={4} className="text-center">
                        <Image className="about"  src="https://www.dafont.com/img/illustration/p/a/passionate.png" roundedCircle />
                        <h2>Resourceful</h2>
                        <p> Everything that we do has a  strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.</p>
                    </Col>
                    <Col xs={6} md={4} className="text-center">
                    <Image className="about" src="https://www.dafont.com/img/illustration/p/a/passionate.png" roundedCircle />
                        <h2>Friendly</h2>
                        <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customer, and we strive to give them the best experience a company can provide.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
