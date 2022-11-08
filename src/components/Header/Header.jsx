import React from "react"
import TypingAnimationHeader from "./TypingAnimationHeader"
import Button from "../Utils/Button/Button"
import Logo from "./Logo"
import "./Header.css"


function Header() {

    return (
        <header className="min-h-screen space-y-10 overflow-hidden lg:mb-10">
            <div className="flex flex-col justify-center items-center">
                <div id="about_titles" className="flex flex-col lg:place-self-start content-center justify-center pt-10 gap-8">
                    <TypingAnimationHeader />
                    <h2>
                        <span className="tertiary">&lt;</span>
                        <span className="secondary">FrontendDeveloper </span>
                        <span className="tertiary">/&gt;</span>
                    </h2>
                    <div className="header-btns flex flex-row justify-start gap-4 py-10">
                        <Button style="transp" title="Conóceme" href="#about"></Button>
                        <Button style="white" title="Descargar CV" href="cv.pdf"></Button>
                    </div>
                </div>
                <Logo />
            </div>
        </header>

    )
}

export default Header
