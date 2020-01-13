import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"


const Header = () => {
  return(
    <div style={{backgroundColor: "darkblue", display: "flex", flexDirection: "row",}}>
     <Link style={{color:"white", textDecoration: "none"}} to="/"><h1 style={{paddding: "2rem", marginLeft:"2rem", marginRight: "10rem"}}>Gidara</h1></Link> 
<Link style={{margin: "1rem", color:"white", textDecoration: "none",}} to ='/companies'>Companies</Link>
<Link style={{margin: "1rem", color:"white", textDecoration: "none",}} to ="team">Team</Link>
<Link style={{margin: "1rem", color:"white", textDecoration: "none",}}to ='/resources'>Resources</Link>
<Link style={{margin: "1rem", color:"white", textDecoration: "none",}}to ='/programs'>Programs</Link>
<Link style={{margin: "1rem", color:"white", textDecoration: "none",}} to ='/about'>About</Link>
<Link style={{margin: "1rem", color:"white", textDecoration: "none",}} to ='/contact'>Contact</Link>
    </div>
  )
}

export default Header