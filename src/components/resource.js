import React from "react";
import "bootstrap/dist/css/bootstrap.css";




const Resource = () =>{
  return(
    <div>
      <h1 >Resources</h1>
      <p style={{marginTop: "2rem", marginLeft: "6rem"}}>Resources for student artists</p>
    <div class="card-deck bg-light" style={{margin: " 0 5rem"}}>
   
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
    </div>
    
  )
}

export default Resource;