

const TechBadge = (props) => {
    
    return (<a href={props.url}><button className={"text-white bg-gradient-to-r hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 " + props.clase}>{props.name}</button></a>)
}

export default TechBadge;