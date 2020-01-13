import React from "react"
import { Link } from "gatsby"
// import "./index.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Resource from "../components/resource"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{margin: "5rem "}}>
<Resource />
    </div>
   
  </Layout>
)

export default IndexPage
