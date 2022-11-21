const HardSkillsButton = (props) => {
    console.log(props.view, props.skill.id)
    return (
        <li>
            <button
                onClick={() => props.setView(props.skill.id)}
                className={props.view == props.skill.id ? 'hardskills_active' : null}>
                {props.skill.title}
            </button>
        </li>
    );
};

export default HardSkillsButton;