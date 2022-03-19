import * as React from "react"
import Layout from "../components/layout";
import GraphqlContext from "../context/graphDataContext";
import { Link } from 'gatsby'
import './css/index.css'

const IndexPage = () => {
  const { allImages } = React.useContext(GraphqlContext)

  return (
    <>
      <Layout>
        <Link to="/portofolio" className="home-button">Wellcome</Link>
      </Layout>
    </>
  )
}

export default IndexPage
