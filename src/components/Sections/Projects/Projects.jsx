import { useState } from 'react';


//Importamos utiles
import useObserver from '../../Hooks/showObserver';
import Title from '../../Utils/SectionTitle/SectionTitle';

//Importamos estilo
import './Projects.css'

//importamos secciones
import ProjectCards from './ProjectCards';
import ProjectsFilter from './ProjectsFilter';

const Projects = () => {

    const { ref: ProjectsRef } = useObserver();
    let [filters, setFilters] = useState({
        search: '',
        techs: [1,5]
    })

    return (
        <section id="Projects" className="mb-20 space-x-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
            <div className="Projects" ref={ProjectsRef}>
                <Title title="Proyectos" number="4" />
                <div id="Projects_main" className="flex flex-col items-center gap-20 justify-center py-5">
                    <ProjectsFilter filters={filters} setFilters={setFilters} />
                    <ProjectCards filters={filters}/>
                </div>
            </div>
        </section>
    )
}

export default Projects;