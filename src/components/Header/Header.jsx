import React from "react"
import TypingAnimationHeader from "./TypingAnimationHeader"
import "./Header.css"


function Header() {

    return (
        <header className="h-screen">
            <div className="m-auto">
                <div className="flex flex-col gap-4">
                    <div className="m-auto avatar">
                        <img src="./src/assets/laptop.png" alt="" />
                    </div>
                    <TypingAnimationHeader/>
                    {/* <div className="titles">
                        <h2>
                            <TypingAnimationHeader />
                        </h2>
                        <h1>
                            <span>&lt;</span><span className="secondary">FrontEndDeveloper</span> <span>/&gt;</span>
                        </h1>
                    </div> */}
                    <div className="header-btns flex flex-row justify-center gap-4 pt-5">
                        <button className="border p-3 rounded-lg hover:bg-white hover:text-black">Conóceme</button>
                        <button className="border p-3 rounded-lg hover:bg-white hover:text-black">Descargar CV</button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
