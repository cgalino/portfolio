


function AboutMeTab() {

    return (
        <div className="flex flex-col content-center gap-8">
            <div id="about_tabdef" className='flex flex-row content-center items-center gap-8'>
                <i class="fas fa-lg fa-user" title="¿Quien soy?"></i>
                <i class="fas fa-lg fa-book" title="Formación"></i>
                <i class="fas fa-lg fa-bolt-lightning" title="Experiencia"></i>
                <i class="fas fa-lg fa-child-reaching" title="Ambición"></i>
            </div>
            <div id="about_card" className="card drop-shadow-lg flex flex-col content-between duration-200 gap-6 hover:scale-105">
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
                {/* <p>
                            Lo que define el desarrollo del tiempo es la madurez y el progreso, la adaptabilidad, el notable crecimiento de mi conocimiento por el uso de nuevas tecnologias y herramientas utilizadas en el mundo
                            frontend y la puesta en marcha de las mismas en los últimos proyectos de la empresa
                        </p> */}
            </div>
        </div>

    )
}

export default AboutMeTab;