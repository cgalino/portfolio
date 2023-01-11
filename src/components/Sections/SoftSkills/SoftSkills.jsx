import showObserver from '../../Hooks/showObserver';
import SectionTitle from '../../Utils/SectionTitle/SectionTitle';
import SoftSkillsData from "../../../data/SoftSkillsData.js";
import { useTranslation } from "react-i18next";

function SoftSkills() {

    const { ref: aboutRef } = showObserver();
    const { t } = useTranslation();

    const items = SoftSkillsData.map(e => (
        <div key={e.id} className="card drop-shadow-lg w-96 h-68 tab-content  duration-300 hover:-translate-y-1 lg:minh72">
            <div className="flex flex-col content-between gap-6">
                <div className='logo-div'>
                    <i className={"fas fa-3x " + e.fa_icon} title={t(`softskills.${e.id}.titulo`)}></i>
                </div>
                <h3>{t(`softskills.${e.id}.titulo`)}</h3>
                <div className='flex flex-col content-between text-base gap-3' dangerouslySetInnerHTML={{ __html: t(`softskills.${e.id}.descripcion`) }} >
                </div>
            </div>
        </div>
    ))

    return (
        <section id="SoftSkills" className="mb-20 space-x-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
            <div ref={aboutRef} className="skills">
                <SectionTitle title="Habilidades" number="2" />
                <div id="skills_main" className="flex flex-row items-center gap-10 justify-center flex-wrap py-5">
                    {items}
                </div>
            </div>
        </section>
    )
}

export default SoftSkills;