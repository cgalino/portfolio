
import { React, useState } from 'react';
import './AboutMeTabs.css';
import AboutMeData from '../../../data/AboutMeData.js';
import { useTranslation } from "react-i18next";

function AboutMeTab() {

    const [activeTab, setActiveTab] = useState(AboutMeData.filter(e => e.id == '1')[0]);
    const { t } = useTranslation();

    const tabItems = AboutMeData.map(d => (
        <button key={d.id}
            onClick={() => setActiveTab(d)}
            className={`about_tab_button flex flex-col gap-5 p-6 md:w-40 md:pb-2 rounded-xl items-center
                        content-between border-mid-transparent bg-mid-light-transparent h-100 duration-200 hover:scale-105
                        ${(activeTab.id == d.id)
                    ? 'active'
                    : 'nonactive'
                }
        `}><i className={"fas fa-xl " + d.fa_icon} title={t(`aboutme.${d.id}.titulo`)}></i> <span className="line-2 hidden md:block">{t(`aboutme.${d.id}.titulo`)}</span></button>
    ));

    return (
        <div className="flex flex-col content-center gap-8 tab">
            <div id="about_tabdef" className='flex flex-row flex-wrap justify-center w-100 items-center gap-2 md:gap-4 xl:gap-6'>
                {tabItems}
            </div>
            <div id="about_card" className="card drop-shadow-lg duration-200 tab-content lg:minh72">
                <div tabpane={activeTab.id} className="tab-pane flex flex-col content-between gap-6">
                    <h3>{t(`aboutme.${activeTab.id}.subtitulo`)}</h3>
                    <div id="about_card_desc" className='flex flex-col content-between gap-3' dangerouslySetInnerHTML={{ __html: t(`aboutme.${activeTab.id}.descripcion`) }} >
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AboutMeTab;