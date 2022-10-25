import showObserver from '../../Hooks/showObserver';

function AboutMe() {

    const { ref: aboutRef } = showObserver();

    return (
        <section id="about" className="mb-20 space-x-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
            <div ref={aboutRef} className="about">
                <div className="title">
                    <span className="secondary">1.</span>
                    <h2>¡Conóceme!</h2>
                </div>
                <div id="about_main" className="flex flex-row items-center gap-20 justify-center flex-wrap-reverse p-5">
                    <div id="about_sidebar">
                        <div id="about_foto">
                            <img src="../src/assets/yo.jpg" />
                        </div>
                        <div id="about_links"></div>
                    </div>
                    <div id="about_card" className="card drop-shadow-lg flex flex-col content-between duration-200 gap-6 xl:w-2/3 lg:w-full md:w-full sm:w-full hover:scale-105">
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
                        <p>
                            Lo que define el desarrollo del tiempo es la madurez y el progreso, la adaptabilidad, el notable crecimiento de mi conocimiento por el uso de nuevas tecnologias y herramientas utilizadas en el mundo
                            frontend y la puesta en marcha de las mismas en los últimos proyectos de la empresa
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;