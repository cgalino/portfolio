const HardSkillsButton = ({ view, setView, skill, title }) => {
    const { id } = skill;
    return (
        <li>
            <button
                onClick={() => setView(id)}
                className={view == id ? 'hardskills__active' : null}>
                {title}
            </button>
        </li>
    );
};

export default HardSkillsButton;