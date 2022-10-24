import React from "react"
import "./Separator.css";

const separatorTypes = ['spikes', 'skewed', 'triangle', 'curved']

function Separator(props) {

    return (
        <section className={separatorTypes[props.type]}></section>
    )
}

export default Separator
