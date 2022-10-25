import showObserver from '../../Hooks/showObserver';

function AboutMe() {

    const { ref: aboutRef } = showObserver();

    return (
        <section id="about" className="mb-20 space-x-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
            <div ref={aboutRef} className="about">
                <div className="title">
                    <span className="secondary">1.</span>
                    <h2>Conóceme!</h2>
                </div>
                <div id="about_main" className="flex flex-row items-center gap-20 justify-center flex-wrap-reverse p-5">
                    <div id="about_sidebar">
                        <div id="about_foto">
                            <img src="../src/assets/yo.jpg" className='drop-shadow-lg' />
                        </div>
                        <div id="about_links"></div>
                    </div>
                    <div id="about_card" className="card drop-shadow-lg flex flex-col content-between gap-6 xl:w-2/3 lg:w-full md:w-full sm:w-full">
                        <h3>¡Bienvenido!</h3>
                        <p>Mi nombre es Carles y soy de Barcelona. Hace más de un año que me dedico a la programación y he descubierto que tiene mucho que ver con mi pasión.
                        </p>
                        <p>Entreno equipos de baloncesto y los últimos 6 años he estado dirigiendo un club de casi 200 familias, lo que me ha permitido desarrollar habilidades personales, metodológicas y de gestión muy valiosas para cualquier trabajo en equipo.
                        </p>
                        <p>Busco una oportunidad laboral seria y de largo recorrido para poder crecer juntos, con un equipo que me permita seguir aprendiendo hasta poder ser yo el que ayude a otros.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;