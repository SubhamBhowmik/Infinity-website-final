import React, { useEffect } from 'react';
import Footer from '../Footer';
import Fade from 'react-reveal'
import './Blogs.css'
import { Button, Form, FormControl, Card, CardGroup, Row, Col, Container} from 'react-bootstrap'

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0,0);  
        
        }, [])
  return (
    <>

    <div className="blog-header">
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content">
    <h2>Infinity Foundation</h2>
    <h1>KNOWLEDGE HUB</h1>
    <h5>One Platform for all your doubts.</h5><br/>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </div>
    </div>

    <div class="container py-5">
    <Container>
    <Fade right>
    <Row>
        <Col sm={4}><img class="blogimage" src="./assets/img/sample.jpg" /></Col>
        <Col sm={8}>
          <h3 class="blogtitle">Title 1</h3><hr />
          <p class="blogcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="highlight">Maxime mollitia</span>,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.Veritatis 
          obcaecati tenetur iure eius earum ut molestias <span class="highlight">architecto voluptate</span> aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.<a href="">Read More</a></p>
          <h6 class="blogauthor">24 March 2021 | David Henson</h6>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}><img class="blogimage" src="./assets/img/sample.jpg" /></Col>
        <Col sm={8}>
          <h3 class="blogtitle">Title 1</h3><hr />
          <p class="blogcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="highlight yellow">Maxime mollitia</span>,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.Veritatis 
          obcaecati tenetur iure eius earum ut molestias <span class="highlight yellow">architecto voluptate</span> aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.<a href="">Read More</a></p>
          <h6 class="blogauthor">24 March 2021 | David Henson</h6>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}><img class="blogimage" src="./assets/img/sample.jpg" /></Col>
        <Col sm={8}>
          <h3 class="blogtitle">Title 1</h3><hr />
          <p class="blogcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="highlight yellow">Maxime mollitia</span>,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.Veritatis 
          obcaecati tenetur iure eius earum ut molestias <span class="highlight yellow">architecto voluptate</span> aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.<a href="">Read More</a></p>
          <h6 class="blogauthor">24 March 2021 | David Henson</h6>
        </Col>
      </Row>
      </Fade>
    </Container>

    </div>

  <div class="categories blue">
  <div class="cat-right">
  <Row xs={1} md={3} className="g-4">
    
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 1</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 2</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 3</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Row>
  </div>
  </div>

  <div class="categories mid">
  <div class="cat-left">
  <Row xs={1} md={3} className="g-4">
    
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 1</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 2</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 3</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Row>
  </div>
  </div>

  <div class="categories green">
  <div class="cat-right">
  <Row xs={1} md={3} className="g-4">
    
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 1</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 2</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="./assets/img/sample.jpg" />
        <Card.Body>
          <Card.Title>Title 3</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <h6 class="blogauthor">24 March 2021 | David Henson</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Row>
  </div>
  </div>

  <div class="container py-5">
    <Container>
    <Fade right>
    <Row>
        <Col sm={4}><img class="blogimage" src="./assets/img/sample.jpg" /></Col>
        <Col sm={8}>
          <h3 class="blogtitle">Title 1</h3><hr />
          <p class="blogcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="highlight">Maxime mollitia</span>,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.Veritatis 
          obcaecati tenetur iure eius earum ut molestias <span class="highlight">architecto voluptate</span> aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.<a href="">Read More</a></p>
          <h6 class="blogauthor">24 March 2021 | David Henson</h6>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}><img class="blogimage" src="./assets/img/sample.jpg" /></Col>
        <Col sm={8}>
          <h3 class="blogtitle">Title 1</h3><hr />
          <p class="blogcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="highlight yellow">Maxime mollitia</span>,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.Veritatis 
          obcaecati tenetur iure eius earum ut molestias <span class="highlight yellow">architecto voluptate</span> aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.<a href="">Read More</a></p>
          <h6 class="blogauthor">24 March 2021 | David Henson</h6>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={4}><img class="blogimage" src="./assets/img/sample.jpg" /></Col>
        <Col sm={8}>
          <h3 class="blogtitle">Title 1</h3><hr />
          <p class="blogcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="highlight yellow">Maxime mollitia</span>,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.Veritatis 
          obcaecati tenetur iure eius earum ut molestias <span class="highlight yellow">architecto voluptate</span> aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.<a href="">Read More</a></p>
          <h6 class="blogauthor">24 March 2021 | David Henson</h6>
        </Col>
      </Row>
      </Fade>
    </Container>

    </div>

    <div class="container py-5">

    </div>

    <Footer />
    </>
  )
}

export default Blogs;
