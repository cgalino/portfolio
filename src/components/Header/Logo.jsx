import './Logo.css';
import Socials from '../Socials/Socials';
import { useEffect, useState } from 'react';


function Logo() {

    const [socialsSize, setSocialsSize] = useState('md')

    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) {
            if (socialsSize == 'sm') setSocialsSize('md')
        } else if (socialsSize == 'md') {
            setSocialsSize('sm')
        }
    });

    return (
        <div id="logo__div" className="place-self-end grid w-full grid-row sm:place-items-end">
            <span>
                <img id="avatar" src="./img/yoraro.png" className='m-auto' alt="" width={"320px"} />
                <Socials size={socialsSize} />
            </span>
        </div>

    )
}


export default Logo;