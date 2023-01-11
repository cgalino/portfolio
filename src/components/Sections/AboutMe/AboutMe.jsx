import showObserver from '../../Hooks/showObserver';
import SectionTitle from '../../Utils/SectionTitle/SectionTitle';
import AboutLinks from './AboutLinks';
import AboutMeTab from './AboutMeTab'

function AboutMe() {

    const { ref: aboutRef } = showObserver();

    return (
        <section id="about" className="mb-20 space-x-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
            <div ref={aboutRef} className="about">
                <SectionTitle title="¡Conóceme!" number="1" />
                <div id="about_main" className="flex flex-row items-center gap-20 justify-center flex-wrap-reverse py-5">
                    <div id="about_sidebar" className='flex flex-col gap-16'>
                        <div id="about_foto">
                            <img src="./img/logo.svg" />
                        </div>
                        <AboutLinks />
                    </div>
                    <div className='w-full xl:w-2/3'>
                        <AboutMeTab />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;