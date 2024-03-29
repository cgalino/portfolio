import techsData from '../../../data/techs'
import Carrousel from '../../Utils/Carrousel/Carrousel';
import TechBadge from './TechBadge';
import { useTranslation } from 'react-i18next';

// const ProjectsCard = ({ key, name, title, body, images, techs, url }) => {
const ProjectsCard = ({ props }) => {
    const { key, name, title, body, images, techs, link } = { ...props };
    const { t } = useTranslation();
    let techBadges = techs.map((t) => techsData.filter((e) => t == e.id)[0]);
    return (
        <div key={key} className="project-card bg-project-card my-4 rounded-xl shadow-xl border-gray-800">
            <div className="h-full rounded-lg border-white overflow-hidden">
                <div className="relative mx-2 mt-2">
                    <Carrousel imgs={images} />
                    <h3 className="absolute bottom-2 right-2">
                        <div className='flex flex-row'>
                            {techBadges.map(e => e && <TechBadge clase={e.clase} name={e.name} url={e.url} />)}
                        </div>
                    </h3>
                </div>
                <div className="flex flex-col justify-content-center gap-4 p-4">
                    <div className='flex flex-row justify-center items-center mb-3 gap-3'><h3 className="title-font text-lg font-medium text-gray-600">{name}</h3><span className="title-font text-xs font-light vertical-center text-gray-400">{title}</span></div>
                    <div className='flex flex-col h-24 text-sm content-between gap-3' dangerouslySetInnerHTML={{ __html: body }} >
                    </div>
                    {
                        (link)
                            ? <div className="justify-self-end flex justify-center flex-wrap my-3">
                                <a href={link}><button className="bg-gradient-to-r text-sm from-blue-600 to-purple-600 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">{t('projects.masinfo')}</button></a>
                            </div>
                            : null
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectsCard;