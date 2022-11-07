
import { React, useState, useEffect } from 'react';
import AboutMeData from './AboutMeData.json';

function AboutMeTab() {


    const [activeTab, setActiveTab] = useState(AboutMeData.filter(e => e.id == 'quiensoy')[0]);


    const tabItems = AboutMeData.map(d => (
        <button key={d.id}
            onClick={() => setActiveTab(d)}
            className={`about_tab_button flex flex-col gap-5 p-6 md:w-40 md:pb-2 rounded-xl items-center
                        content-between border-mid-transparent bg-mid-light-transparent h-100 duration-200 hover:scale-105
                        ${(activeTab.id == d.id)
                    ? 'active'
                    : 'nonactive'
                }
        `}><i className={"fas fa-xl " + d.fa_icon} title={d.tab_title}></i> <span className="line-2 hidden md:block">{d.tab_title}</span></button>
    ));

    return (
        <div className="flex flex-col content-center gap-8 tab">
            <div id="about_tabdef" className='flex flex-row justify-center w-100 items-center gap-2 md:gap-4 xl:gap-6'>
                {tabItems}
            </div>
            <div id="about_card" className="card drop-shadow-lg duration-200 tab-content">
                <div tabpane={activeTab.id} className="tab-pane flex flex-col content-between gap-6">
                    <h3>{activeTab.content_title}</h3>
                    <div id="about_card_desc" className='flex flex-col content-between gap-3' dangerouslySetInnerHTML={{ __html: activeTab.content_body }} >
                    </div>
            </div>
        </div>
        </div >

    )
}

export default AboutMeTab;