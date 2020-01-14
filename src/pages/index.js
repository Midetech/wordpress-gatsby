import React from "react"
import { Link } from "gatsby"
// import "./index.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Resource from "../components/resource"
import Hero from "../components/hero"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
     <Hero/>
    <div class="bg-light">
      
<Resource />
    </div>
  
  </Layout>
)

export default IndexPage
