import { React, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function TypingAnimationHeader(props) {

    const [hola, setHola] = useState(false);

    return (
        <div className="titles">
            <h1>
                <TypeAnimation
                    sequence={[
                        '',
                        200,
                        props.texts[0], // Types 'One'
                        600, // Waits 1s
                        props.texts[1], // Deletes 'One' and types
                        () => {
                            setHola(true); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={false}
                    className={'font-light'}
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
                            className={'font-bold secondary'}
                        />
                        : null
                }
            </h1>
        </div >
    )
}

export default TypingAnimationHeader

