import techsData from '../../../data/techs'
import Carrousel from '../../Utils/Carrousel/Carrousel';
import TechBadge from './TechBadge';

// const ProjectsCard = ({ key, name, title, body, images, techs, url }) => {
const ProjectsCard = ({ props }) => {
    const { key, name, title, body, images, techs, link } = { ...props };

    let techBadges = techs.map((t) => techsData.filter((e) => t == e.id)[0]);
    console.log(techBadges)

    return (
        <div key={key} className="project-card bg-mid-transparent m-4 rounded-xl border-1">
            <div className="h-full w-full rounded-lg border-white overflow-hidden">
                <div className="relative mx-2 mt-2">
                    <Carrousel imgs={images} />
                    <h3 class="absolute bottom-2 right-2">
                        <div className='flex flex-row'>
                            {techBadges.map(e => e && <TechBadge clase={e.clase} name={e.name} url={e.url} />)}
                        </div>
                    </h3>
                </div>
                <div className="flex flex-col justify-content-center gap-4 p-4">
                    <h4 className="title-font font-medium text-gray-400">{title}</h4>
                    <h3 className="title-font text-lg font-medium text-gray-600 mb-3">{name}</h3>
                    <div className='flex flex-col h-32 content-between gap-3' dangerouslySetInnerHTML={{ __html: body }} >
                    </div>
                    {
                        (link)
                            ? <div className="justify-self-end flex justify-center flex-wrap my-3">
                                <a href={link}><button className="bg-gradient-to-r text-sm from-blue-600 to-purple-600 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Más información</button></a>
                            </div>
                            : null
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectsCard;