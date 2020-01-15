import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./footer.css"

const Footer = () => {
  return (
         <div class="container-fluid footer">
  <div class="main-footer">
    <div class="sub-footer">
    <nav className="nav-one col-md">
          <ul>
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/">Catalog</a>
            </li>
            <li>
              <a href="/">Popular</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
          </ul>
        </nav>
    </div>
   <div class="sub-footer">
    <nav className="nav-two col-md">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/">Catalog</a>
            </li>
            <li>
              <a href="/">Popular</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
          </ul>
        </nav>
        </div>
   <div class="sub-footer">
    <nav className="nav-three col-md">
          <ul>
            <li>
              <a href="/">Catalog</a>
            </li>
            <li>
              <a href="/">Catalog</a>
            </li>
            <li>
              <a href="/">Popular</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
          </ul>
        </nav>
        </div>
        <h3 class="logo">Gidara</h3>
        <p class="slogan">Your music career success partner</p>
   </div>
    <div
        style={{
          margin: `0 auto`,
          color: `#fff`,
          maxWidth: 960,
          padding: `2rem 1.0875rem 1.45rem`,
          paddingTop: 0,
          textAlign: `center`,
        }}
      >
      
   
          © {new Date().getFullYear()}, Built with
          {` `}
        
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      
      </div>
  </div>

    
  )
}

export default Footer
