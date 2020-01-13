import React from 'react';
import "bootstrap/dist/css/bootstrap.css"


const Hero = () => {
    return(
        <div class="container-fluid" style={{backgroundColor: "#1b2a49", color:"#ffffff"}}>
            <div class="row">
                <div class="col-md">
<p class="text-left text-monospace">Your music career success partner</p>
<h5 class="text-monospace text-wrap text-align" style={{fontSize: "2rem"}}>We back Nigerian indie <br/>
artists from around the<br/>
world and help them do<br/>
their best work</h5>
<p>We invest between N2m - N5m in marketing, production and
promotional fees in youbg budding Nigerian artists and help
them suceed with design support and our network of
successful Indie musicians.</p>
                </div>
                <div class="col-md">
                    <img src="https://res.cloudinary.com/mideveloper/image/upload/v1578904159/Hero_image_xrqhvi.png" class="img-responsive" alt="herro"/>
                </div>

            </div>

        </div>
    )
}

export default Hero;