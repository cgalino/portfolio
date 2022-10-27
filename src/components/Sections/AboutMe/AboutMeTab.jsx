
import { React, useState, useEffect } from 'react';
import AboutMeData from './AboutMeData.json';

function AboutMeTab() {

    const [activeTab, setActiveTab] = useState("quiensoy");
    const tabItems = AboutMeData.map(d => (
        <button tabid={d.id} className={`about_tab_button flex flex-col gap-5 p-6 md:w-40 md:pb-2 rounded-xl items-center
         content-between border-mid-transparent background-mid-light-transparent h-100 duration-200 hover:scale-105
          ${
            (activeTab == d.id)
                ? 'active'
                : 'nonactive'    
        }
        `}><i className={"fas fa-xl " + d.fa_icon} title={d.tab_title}></i> <span className="line-2 hidden md:block">{d.tab_title}</span></button>
    ));

    return (
        <div className="flex flex-col content-center gap-8 tab">
            <div id="about_tabdef" className='flex flex-row justify-center w-100 items-center gap-4'>
                {tabItems}
            </div>
            <div id="about_card" className="card drop-shadow-lg duration-200 tab-content hover:scale-105">
                <div tabpane="quiensoy" className="tab-pane flex flex-col content-between gap-6">
                    <h3>¡Bienvenido!</h3>
                    <p>
                        Mi nombre es <strong>Carles</strong> y soy de Barcelona. Hace más de un 5 años que me dedico al desarrollo de proyectos frontend, materia que poco a poco se ha convertido en mi pasión.
                    </p>
                    <p>
                        Estudié un Grado superior de DAM en Educem y posteriormente entré a trabajar como desarrollador web en Promo-soft (Empresa en la cual trabajo desde entonces).
                    </p>
                    <p>
                        Durante mis años de experiencia he realizado numerosos proyectos de gran embergadura(algunos de ellos citados en <a className='secondary font-bold cursor-pointer'>Proyectos</a>) utilizando tecnologías muy diversas y colaborando en entornos de front y back.
                    </p>
                </div>
                {/* <p>
                            Lo que define el desarrollo del tiempo es la madurez y el progreso, la adaptabilidad, el notable crecimiento de mi conocimiento por el uso de nuevas tecnologias y herramientas utilizadas en el mundo
                            frontend y la puesta en marcha de las mismas en los últimos proyectos de la empresa
                        </p> */}
            </div>
        </div>

    )
}

export default AboutMeTab;