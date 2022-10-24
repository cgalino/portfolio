import { React, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function TypingAnimationHeader() {

    const [hola, setHola] = useState(false);

    return (
        <div className="titles">
            <h2>
                <TypeAnimation
                    sequence={[
                        '',
                        500,
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
                                'Carles Galino'
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
                <span>&lt;</span>
                <span className="secondary">FrontEndDeveloper</span>
                <span>/&gt;</span>
            </h1>
        </div >
    )
}

export default TypingAnimationHeader

