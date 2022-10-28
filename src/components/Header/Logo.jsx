import './Logo.css';
import Socials from '../Socials/Socials';


function Logo() {

    return (
        <div className="avatar flex flex-col content-center xs:w-screen">
            <img src="/img/yoraro.png" alt="" />
            <Socials />
        </div>

    )
}


export default Logo;