import React from "react"
import TypingAnimationHeader from "./TypingAnimationHeader"
import Separator from "../Utils/Separator/Separator"
import "./Header.css"


function Header() {

    return (
        <header className="min-h-screen mb-10 space-y-10 overflow-hidden">
            <div>
                <div id="about_titles" className="flex flex-col justify-center gap-8">
                    <TypingAnimationHeader />
                    <h2>
                        <span className="tertiary">&lt;</span>
                        <span className="secondary">FrontendDeveloper </span>
                        <span className="tertiary">/&gt;</span>
                    </h2>
                    <div className="header-btns flex flex-row justify-start gap-4 py-10">
                        <button className="border p-2 rounded-lg hover:bg-white hover:text-black sm:btn-sm">Conóceme</button>
                        <button className="border p-2 rounded-lg hover:bg-white hover:text-black sm:btn-sm">Descargar CV</button>
                    </div>
                </div>
                <div className="align-right avatar duration-200 hover:scale-105">
                    <img src="./src/assets/laptop.png" alt="" />
                </div>
            </div>
        </header>

    )
}

export default Header
