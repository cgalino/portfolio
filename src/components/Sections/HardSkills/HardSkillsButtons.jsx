const HardSkillsButton = ({ view, setView, skill }) => {
    const { id, title } = skill;
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