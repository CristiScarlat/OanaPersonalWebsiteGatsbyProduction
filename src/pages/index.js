import * as React from "react"
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import { UI_TEXT } from './constants';
import GraphqlContext from "../context/graphDataContext";
import { Link } from 'gatsby'
import './css/index.css'

const IndexPage = () => {
  const { allImages } = React.useContext(GraphqlContext)

  return (
    <Layout>
      <Container fluid className="home-container mt-3">
        <Row className="justify-content-md-start">
          <Col md="auto">
            <div style={{ position: 'relative' }}>
              <img src="img/home-no-text.jpg" style={{ width: '100%' }} />
              <p id="paul-gauguin-min-420" style={{ position: 'absolute', top: '50%', right: 0 }}>{UI_TEXT.PAUL_GAUGUIN}</p>
            </div>
          </Col>
        </Row>
        <Row id="oana-name" className="justify-content-md-center mt-2 mb-2">
          <Col md="auto">
            <p id="paul-gauguin-max-420">{UI_TEXT.PAUL_GAUGUIN}</p>
            <p>PhD Artist Oana Bolog-Bleich</p>
          </Col>
        </Row>
        <Row>
          <div className="home-images-container">
            {allImages.filter(i => i.aspectRatio === 1).map(imgObj => <Link to="/portofolio">
              <img width="320px" height={320 / imgObj.aspectRatio} key={imgObj.src} src={imgObj.src} className="m-1" />
            </Link>)}
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
