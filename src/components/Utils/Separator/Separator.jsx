import React from "react"
import "./Separator.css";

const separatorTypes = ['spikes', 'skewed', 'triangle', 'curved']

function Separator(props) {

    return (
        <section>
            <div className={separatorTypes[props.type]}></div>
        </section>
    )
}

export default Separator
