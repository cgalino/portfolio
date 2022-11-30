import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

import projectsData from '../../../data/ProjectsData'


const ProjectsCards = ({ filters }) => {

        const [filteredProjects, setFilteredProjects] = useState(projectsData);
        const filterProjects = () => {
                setFilteredProjects(filteredProjects);

        }

        useEffect(() => {
                filterProjects();
        }, [filters])

        console.log(filteredProjects);

        return (
                <div className='flex flex-row flex-wrap px-2 justify-center'>
                        {
                                filteredProjects.map(p => <ProjectCard props={p} />)
                        }
                </div>
        )
}

export default ProjectsCards;