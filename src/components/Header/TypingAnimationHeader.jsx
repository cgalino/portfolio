import { React, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function TypingAnimationHeader() {

    const [hola, setHola] = useState(false);
    const [nombre, setNombre] = useState(false);

    return (
        <div className="titles">
            <h2>
                <TypeAnimation
                    sequence={[
                        '¡Hola!', // Types 'One'
                        1000, // Waits 1s
                        '¡Hola! Soy ', // Deletes 'One' and types
                        () => {
                            setHola(true); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={false}
                    style={{ fontSize: '1em' }}
                />
                {
                    (hola) ?
                        <TypeAnimation
                            sequence={[
                                'Carles Galino', // Deletes 'One' and types
                                () => {
                                    setNombre(true); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={false}
                            className={'font-bold'}
                        />
                        : null
                }
            </h2>
            <h1>
                {(nombre)
                    ?
                    <span>
                        <span>&lt;</span>
                        <TypeAnimation
                            sequence={[
                                'FullSt', // Types 'One'
                                1000, // Waits 1s
                                'FrontendDeveloper'
                            ]}
                            wrapper="span"
                            cursor={false}
                            repeat={true}
                            className={"secondary pr-2"}
                            style={{ fontSize: '1em' }}
                        />
                        <span>/&gt;</span>
                    </span>
                    : null

                }
            </h1>
        </div >
    )
}

export default TypingAnimationHeader

