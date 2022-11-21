import { useEffect, useRef } from 'react';
import HardSkillsButton from '../HardSkillsButtons';
import data from '../HardSkillsData';

const MenuDesktop = ({ view, setView }) => {
    const bar = useRef(null);

    useEffect(() => {
        setBar(view, bar);
    }, [view]);

    const HardSkillButtons = data.map((e) => <HardSkillsButton key={e.id} view={view} setView={setView} skill={e} />)

    return (
        <nav className="skills__menu">
            <ul>
                <div className="skills__bar" ref={bar}></div>
                {HardSkillButtons}
            </ul>
        </nav>
    );
};

const setBar = (view, bar) => {
    const name = data.filter(e => e.id = view);
    switch (name) {
        case 'FRONTEND': bar.current.style.transform = 'translateY(0rem)';
            break;
        case 'BACKEND': bar.current.style.transform = 'translateY(2.5rem)';
            break;
        case 'TOOLS': bar.current.style.transform = 'translateY(5rem)';
            break;
        case 'DATABASE': bar.current.style.transform = 'translateY(7.5rem)';
    }
};

export default MenuDesktop;