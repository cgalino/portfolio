import './Logo.css';
import Socials from '../Socials/Socials';
import { useEffect, useState } from 'react';


function Logo() {

    const resizeHandler = () => {
        if (window.innerWidth > 720) {
            if (socialsSize == 'sm') setSocialsSize('md')
        } else if (socialsSize == 'md') {
            setSocialsSize('sm')
        }
    }

    const [socialsSize, setSocialsSize] = useState('md')

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return (
        <div id="logo__div" className="place-self-end grid w-full grid-row m-auto sm:place-items-end">
            <span>
                <img id="avatar" src="./img/logo.svg" className='m-auto' alt="" width={"320px"} />
                <Socials size={socialsSize} />
            </span>
        </div>

    )
}


export default Logo;