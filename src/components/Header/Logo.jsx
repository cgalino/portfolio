import './Logo.css';
import Socials from '../Socials/Socials';


function Logo() {

    return (
        <div className="lg:place-self-end flex flex-col items-center content-center">
            <img id="avatar" src="./img/yoraro.png" alt="" width={"370px"} />
            <Socials />
        </div>

    )
}


export default Logo;