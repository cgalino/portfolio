import techsData from '../../../data/techs'
import TechBadge from './TechBadge';

const ProjectsCard = ({ id, name, title, body, images, techs, url }) => {

    let techBadges = techs.map((t) => techsData.filter((e) => t == e.id)[0]);
    console.log(techBadges)

    return (
        <div className="project-card bg-mid-transparent m-4 rounded-xl border-1">
            <div className="h-full w-full rounded-lg border-white overflow-hidden">
                <div className="relative mx-2 mt-2">
                    <img className="object-cover object-center rounded-t-xl rounded-b-md" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"></img>
                    <h3 class="absolute top-2 left-2">
                        {name}
                    </h3>
                    <h3 class="absolute bottom-2 right-2">
                        <div className='flex flex-row'>
                            {techBadges.map(e => <TechBadge clase={e.clase} name={e.name} url={e.url} />)}
                        </div>
                    </h3>
                </div>
                <div className="p-6 border-1 border-white">
                    <h3 className="title-font text-lg font-medium text-gray-600 mb-3">{title}</h3>
                    <p className="leading-relaxed mb-3">{body}</p>
                    {
                        (url)
                            ? <div className="flex items-center justify-center flex-wrap ">
                                <button href={url} className="bg-gradient-to-r text-sm from-blue-400 to-purple-400 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Más información</button>
                            </div>
                            : null
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectsCard;