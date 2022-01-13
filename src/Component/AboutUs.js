import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { Carousel, Card, Button, Row, Col, Accordion } from 'react-bootstrap';
import Fade from 'react-reveal'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Footer from './Footer';


const AboutUs = () => {
  useEffect(() => {
  window.scrollTo(0,0);  
  
  }, [])
  return (
    <>
      <div>
       
        <div class="container py-5">
          <div class="row gy-4">
           
            <div class="col-lg-5">
            <Fade top>
              <img class="img-fluid" src="./assets/img/method.png" alt="" />
              </Fade>
            </div>
         
            <div class="col-lg-6">
            <div className='middletext'>
            <Fade right>
              <p class="h6 mb-1 text-uppercase text-primary mb-3">Infinity Foundation</p>
              <h2 class="mb-4">"Your limits are waiting for you to reach beyond infinity". </h2>
              <p class="text-body">We believe that knowledge has no boundaries. We train students and professionals to challenge
                their limits and develop skills that set them apart.</p>
                </Fade>
            </div>
            </div>
            
          </div>
          <hr width="80%;" />
        </div>

        <div className='bg1'>
          <div class="container py-5">
            <div class="left-text">
            <Fade left>
              <p class="h6 text-uppercase text-primary">Courses We Offer</p>
              <h3>We offer certification courses on 50+ topics</h3>
              <p class="text-muted">All of our courses are specially curated to deliver you with the best and most relevant skills for the job market.
                Our expert teachers ensure that every topic is taught to you with precision and care.</p>
                </Fade>
            </div>
          </div>
        </div>

        <div className='bg2'>
          <div class="container py-5">
            <div style={{ display: 'block', alignContent: 'center', paddingLeft: 60, paddingRight: 60 }}>
              <Row xs={1} md={3} className="g-4">
              <Fade left>
                <Col>
                  <Card className='course-class'>
                    <Card.Img variant="top" src="./assets/img/webdev.jpeg" />
                    <Card.Body>
                      <Card.Text>
                        WEB DEVELOPMENT
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className='course-class'>
                    <Card.Img variant="top" src="./assets/img/androiddev.jpg" />
                    <Card.Body>
                      <Card.Text>
                        ANDROID DEVELOPMENT
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className='course-class'>
                    <Card.Img variant="top" src="./assets/img/datascience.png" />
                    <Card.Body>
                      <Card.Text>
                        DATA SCIENCE
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className='course-class'>
                    <Card.Img variant="top" src="./assets/img/businessanalytics.jpg" />
                    <Card.Body>
                      <Card.Text>
                        BUSINESS ANALYTICS
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className='course-class'>
                    <Card.Img variant="top" src="./assets/img/hr.jpg" />
                    <Card.Body>
                      <Card.Text>
                        HUMAN RESOURCE
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className='course-class'>
                    <Card.Img variant="top" src="./assets/img/other.jpeg" />
                    <Card.Body>
                      <Card.Text>
                        OTHER COURSES
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                </Fade>
              </Row>
            </div>
          </div>
        </div>

        <div className='bg3'>
          <div class="container py-5">
            <div class="right-text">
            <Fade right>
              <p class="h6 text-uppercase text-primary">Internship Opportunities</p>
              <h3>We Provide market specialised internships to students and professionals</h3>
              <p class="text-muted">All of our courses are specially curated to deliver you with the best and most relevant skills for the job market.
                Our expert teachers ensure that every topic is taught to you with precision and care.</p>
                </Fade>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default AboutUs
