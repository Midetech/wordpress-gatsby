import React from "react";
import "./newsletter.css";


const Newsletter = () => {
    return(
        <div class="container-fluid newsletter-section">
            <h5 class="mini-title">Great updates</h5>
            <h1 class="subscribe">Sign up to our newsletter to get updates on<br/>
events, news and opportunities</h1>
<div style={{margin: "0 auto"}}>
    <input type="email" placeholder="Username or Email" class="input"/>
    <input type="button" value="Subscribe" class="submit"/>
</div>

        </div>
    )
}


export default Newsletter;