import { StaticQuery, graphql, Link } from "gatsby"
import React from "react";
import "./header.css";


const Header = () => {
  return(
    <div class="container-fluid" style={{backgroundColor: "#1b2a49"}}>
     <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" id="title" href="/">Gidara</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
      <Link style={{margin: "1rem", color:"white", textDecoration: "none",}} to ='/companies'>Companies</Link>
      </li>
      <li class="nav-item">
      <Link style={{margin: "1rem", color:"white", textDecoration: "none",}} to ="team">Team</Link>
      </li>
      <li class="nav-item">
      <Link style={{margin: "1rem", color:"white", textDecoration: "none",}}to ='/resources'>Resources</Link>
      </li>
      <li class="nav-item">
      <Link style={{margin: "1rem", color:"white", textDecoration: "none",}}to ='/programs'>Programs</Link>
      </li>
      <li class="nav-item">
      <Link style={{margin: "1rem", color:"white", textDecoration: "none",}} to ='/about'>About</Link>
      </li>
      <li class="nav-item">
      <Link style={{margin: "1rem", color:"white", textDecoration: "none",}} to ='/contact'>Contact</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header