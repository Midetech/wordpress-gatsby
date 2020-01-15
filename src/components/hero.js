import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "./hero.css"

const Hero = () => {
    return(
        <div class="container-fluid hero-container">
            <div class="row">
                <div class="col-md">
<p class="text-left hero-title">Your music career success partner</p>
<h5 class=" text-align hero-content">We back Nigerian indie <br/>
artists from around the<br/>
world and help them do<br/>
their best work</h5>
<p class="hero-content-two">We invest between N2m - N5m in marketing, production and
promotional fees in youbg budding Nigerian artists and help<br/>
them suceed with design support and our network of<br/>
successful Indie musicians.</p>

                </div>
                <div class="col-md">
                    <img src="https://res.cloudinary.com/mideveloper/image/upload/v1578904159/Hero_image_xrqhvi.png" class="img-responsive hero-image" alt="herro"/>
                </div>

            </div>

        </div>
    )
}

export default Hero;