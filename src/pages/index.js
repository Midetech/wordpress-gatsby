import React from "react"
import { Link } from "gatsby"
// import "./index.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Resource from "../components/resource"
import Hero from "../components/hero"
import Mentor from "../components/mentor"
import Newsletter from "../components/newsletter"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
     <Hero />
     <Resource name="You’re in great company" title="What we do"/>
   <Mentor/>
      
<Resource name="Resources for student artists" title="Resources"/>
      
<Resource name="Resources for graduate artists"/>
  <Newsletter/>
  
  </Layout>
)

export default IndexPage
