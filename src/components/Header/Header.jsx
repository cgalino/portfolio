import React from "react"
import TypingAnimationHeader from "./TypingAnimationHeader"
import Separator from "../Utils/Separator/Separator"
import "./Header.css"


function Header() {

    return (
        <header className="h-full">
            <div className="m-auto">
                <div className="flex flex-col gap-4">
                    <div className="m-auto avatar duration-200 hover:scale-105">
                        <img src="./src/assets/laptop.png" alt="" />
                    </div>

                    <TypingAnimationHeader />
                    <h1>
                        <span className="tertiary">&lt;</span>
                        <span className="secondary">FrontendDeveloper </span>
                        <span className="tertiary">/&gt;</span>
                    </h1>
                    <div className="header-btns flex flex-row justify-center gap-4 py-5">
                        <button className="border p-2 rounded-lg hover:bg-white hover:text-black sm:btn-sm">Conóceme</button>
                        <button className="border p-2 rounded-lg hover:bg-white hover:text-black sm:btn-sm">Descargar CV</button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
