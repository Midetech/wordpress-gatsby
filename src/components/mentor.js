import React from "react";
import "./mentor.css"

const Mentor = () => {
    return(
        <div class="mentor-section">
            <h1 class="mentor-title">Our Mentors</h1>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm">
      <img src="https://res.cloudinary.com/mideveloper/image/upload/v1578900773/Mentors_section_image_1_-_Killer_Mike_xee2kc.png" class="rounded" alt="mentor one"/>
      <h2 class="mentor-name">Killer Mike</h2>
        <p class="mentor-info">known by his stage name Killer Mike,<br/>
activist. He is the founder of Grind<br/>
launched through the SMC and</p>
    </div>
    <div class="col-sm">
     <img src="https://res.cloudinary.com/mideveloper/image/upload/v1578901330/Mentors_section_image_2_-_Timbaland_pteqoh.png" class="rounded" alt="mentor two"></img>
     <h2 class="mentor-name">Timberland</h2>
        <p class="mentor-info">Timothy Zachary Mosley, known professionally as Timbaland, is an<br/>
American record producer, rapper, singer, songwriter, and DJ.<br/>
Timbaland's first full credit production work was in 1996 on<br/>
Ginuwine...the Bachelor for R&B singer Ginuwine.</p>
    </div>
    
    <div class="col-sm">
      <img src="https://res.cloudinary.com/mideveloper/image/upload/v1578873407/Mentors_section_image_3_-_Chance_the_rapper_gdo6yr.png" class="rounded" alt="mentor three"/>
      <h2 class="mentor-name">Chance The Rapper</h2>
        <p class="mentor-info">Chancelor Jonathan Bennett, known <br/>
        Rapper, is an American rapper, singer, <br/>
        Born in Chicago, Illinois, Chance the <br/>
        mixtape 10 Day in 2012</p>
    </div>
  </div>
</div>
        </div>
    )
}

export default Mentor;