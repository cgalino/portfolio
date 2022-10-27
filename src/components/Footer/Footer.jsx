import React from "react"
import "./Footer.css"
import Socials from "../Socials/Socials"

function Footer() {

    return (
        <footer className="h-auto fixed-bottom py-8">
            <div className="m-auto pt-5">
                <Socials></Socials>
            </div>
        </footer>

    )
}

export default Footer
