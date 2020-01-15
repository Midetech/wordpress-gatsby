import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./resource.css"



const Resource = (props) =>{
  return(
    <div style={{marginTop:"2em"}}>
      <hr style={{ margin: "0 auto", width: "40em", backgroundColor: "black"}}/>
      <h1 class="resource-title">{props.title}</h1>
  <p style={{marginTop: ".5rem", marginLeft: "6rem"}}>{props.name}</p>
    <div class="card-deck t" style={{margin: " 0 1rem"}}>
   
    <div class="card shadow p-3 mb-5 bg-white rounded">
      
      <img src="https://res.cloudinary.com/mideveloper/image/upload/v1578904558/What_we_do_section_image_1_d1tdyu.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">One</h5>
        <p class="card-text">Place any text you want here etc.
We invest between N2m - N5m in
marketing, production and
promotional fees.</p>
        </div>
    </div>
    <div class="card shadow p-3 mb-5 bg-white rounded">
      <img src="https://res.cloudinary.com/mideveloper/image/upload/v1578989404/What_we_do_section_image_2_yajv3z.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title bold">Two</h5>
        <p class="card-text">Place any text you want here etc.
We invest between N2m - N5m in
marketing, production and
promotional fees.</p>
        </div>
    </div>
    <div class="card shadow p-3 mb-5 bg-white rounded">
      <img src="https://res.cloudinary.com/mideveloper/image/upload/v1578904381/What_we_do_section_image_3_ty0fpk.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Three</h5>
        <p class="card-text">Place any text you want here etc.
We invest between N2m - N5m in
marketing, production and
promotional fees.</p>
        </div>
    </div>
    
  </div>
  <button>VIEW ALL RESOURCES &rarr;</button>
    </div>
    
  )
}

export default Resource;