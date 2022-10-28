import showObserver from '../../Hooks/showObserver';
import AboutMeTab from './AboutMeTab'

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
                            <img src="./img/yo.jpg" />
                        </div>
                        <div id="about_links"></div>
                    </div>
                    <div className='xl:w-2/3 lg:w-full md:w-full sm:w-full '>
                        <AboutMeTab />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;