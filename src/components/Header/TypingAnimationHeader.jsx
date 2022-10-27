import { React, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function TypingAnimationHeader() {

    const [hola, setHola] = useState(false);

    return (
        <div className="titles">
            <h1>
                <TypeAnimation
                    sequence={[
                        '',
                        200,
                        '¡Hola!', // Types 'One'
                        600, // Waits 1s
                        '¡Hola! Soy ', // Deletes 'One' and types
                        () => {
                            setHola(true); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={false}
                    style={{ fontSize: '1em'}}
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
            </h1>
        </div >
    )
}

export default TypingAnimationHeader

