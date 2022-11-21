import './SectionTitle.css'

const SectionTitle = (props) => {

    return (
        <div className="title text-xl md:text-2xl lg:text-3xl">
            <span className="secondary">{props.number}.</span>
            <h2>{props.title}</h2>
        </div>
    )
}

export default SectionTitle;