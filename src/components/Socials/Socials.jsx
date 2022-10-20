import React from "react"
import "./Socials.css";

function Socials(props) {

    return (
        <div className={"socials-div flex flex-row justify-center gap-6 pt-5 " + props.size}>
            <a href="https://github.com/cgalino" class="social_logo" target="_blank" rel="noopener noreferrer"><img src="./src/assets/github.svg" alt="github" title="github" /></a>
            <a href="https://linkedin.com/in/carles-galino-920436184" class="social_logo" target="_blank" rel="noopener noreferrer"><img src="./src/assets/linkedin.svg" alt="linkedin" title="linkedin" /></a>
            <a href="https://instagram.com/carlesgalino" class="social_logo" target="_blank" rel="noopener noreferrer"><img src="./src/assets/instagram.svg" alt="instagram" title="instagram" /></a>
        </div>
    )
}

export default Socials
