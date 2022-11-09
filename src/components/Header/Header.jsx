import React from "react"
import TypingAnimationHeader from "./TypingAnimationHeader"
import Button from "../Utils/Button/Button"
import Logo from "./Logo"
import "./Header.css"


function Header() {

    return (
        <header className="min-h-screen space-y-10 w-screen overflow-hidden mt-24">
            <div className="grid justify-center items-center gap-20">
                <div className="flex flex-col w-full text-left pt-8 lg:place-self-start content-center justify-center gap-8">
                    <TypingAnimationHeader />
                    <h2>
                        <span className="tertiary">&lt;</span>
                        <span className="secondary">FrontendDeveloper </span>
                        <span className="tertiary">/&gt;</span>
                    </h2>
                    <div className="header-btns flex flex-row lg:justify-start justify-center gap-4 pt-10">
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
