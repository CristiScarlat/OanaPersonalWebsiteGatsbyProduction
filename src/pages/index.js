import * as React from "react"
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
//import { UI_TEXT } from './constants';
import GraphqlContext from "../context/graphDataContext";
import { Link } from 'gatsby'
import './css/index.css'

const IndexPage = () => {
  const { allImages } = React.useContext(GraphqlContext)

  return (
    <Layout>
        {/* <Link to="/portofolio/" className="home-button">Welcom to my world</Link> */}
    </Layout>
  )
}

export default IndexPage
