import * as React from "react"
import Layout from "../components/layout";
import { Link } from 'gatsby'
import './css/index.css'

const IndexPage = () => {

  return (
    <>
      <Layout>
        <Link to="/portofolio" className="home-button">Wellcome</Link>
      </Layout>
    </>
  )
}

export default IndexPage
