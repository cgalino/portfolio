import React from "react"
import TypingAnimationHeader from "./TypingAnimationHeader"
import Button from "../Utils/Button/Button"
import Logo from "./Logo"
import "./Header.css"


function Header() {

    return (
        <header className="min-h-screen space-y-2 w-screen m-auto overflow-hidden mt-4">
            <div id="header_joiner_div" className="grid justify-center items-center gap-20">
                <div id="header_titles_div" className="flex flex-col w-full text-left pt-8 place-self-start gap-6">
                    <TypingAnimationHeader />
                    <h2>
                        <span className="tertiary">&lt;</span>
                        <span className="secondary">FrontendDeveloper </span>
                        <span className="tertiary">/&gt;</span>
                    </h2>
                    <div className="header-btns flex flex-row lg:justify-start justify-center gap-4 pt-10">
                        <Button style="transp" title="Conóceme" href="#about"></Button>
                        <Button style="white" title="Descargar CV" href="CarlesGalinoCV.pdf"></Button>
                    </div>
                </div>
                <Logo />
            </div>
        </header>

    )
}

export default Header
