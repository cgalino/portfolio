import React from "react"
import { useEffect } from "react";
import { useState } from "react"


function Carrousel({ imgs }) {

    const [activeImg, setActiveImg] = useState(0);

    const setActiveImgClick = (type) => {
        if (type == 'next') setActiveImg(activeImg+1);
        if (type == 'previous') setActiveImg(activeImg-1);
    }

    const hasBackAndNext = () => {
        let res = [imgs[activeImg - 1], imgs[activeImg + 1]];
        return res;
    }

    let [backNext, setBackNext] = useState(hasBackAndNext);

    useEffect(() => {
        setBackNext(hasBackAndNext());
    }, [activeImg])

    return (
        <>
            <img className="opacity-75 h-60 m-auto transition-all duration-500 hover:scale-105 hover:opacity-100 object-cover object-center rounded-t-xl rounded-b-md" src={imgs[activeImg]} alt="blog"></img>
            {backNext[0] && <i class="absolute inset-y-1/2 drop-shadow cursor-pointer left-5 secondary fas fa-xl fa-circle-chevron-left" onClick={() => setActiveImgClick('previous')}></i>}
            {backNext[1] && <i class="absolute inset-y-1/2 drop-shadow cursor-pointer right-5 secondary fas  fa-xl fa-circle-chevron-right" onClick={() => setActiveImgClick('next')}></i>}
        </>
    )
}

export default Carrousel
