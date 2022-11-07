import './SectionTitle.css'

const SectionTitle = (props) => {

    return (
        <div className="title">
            <span className="secondary">{props.number}.</span>
            <h2>{props.title}</h2>
        </div>
    )
}

export default SectionTitle;