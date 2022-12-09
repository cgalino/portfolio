import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

import data from '../../../data/ProjectsData'


const ProjectsCards = ({ filters }) => {

        const pd = data.map(obj => ({ ...obj, searchText: `${obj.name} ${obj.title} ${obj.body}`.toUpperCase() }))

        const [filteredProjects, setFilteredProjects] = useState(pd);
        const hasTech = (tech) => filters.techs.indexOf(tech) >= 0;

        const filterSearch = f => f.searchText.indexOf(filters.search) >= 0;
        const filterTechs = f => f.techs.some(hasTech);

        const filterProjects = () => {
                let fp = [...pd];

                if (filters.search) fp = fp.filter(filterSearch);
                if (filters.techs.length > 0) fp = fp.filter(filterTechs);
                
                setFilteredProjects(fp);
        }

        useEffect(() => {
                filterProjects();
        }, [filters])


        return (
                <div className='flex flex-row flex-wrap gap-4 justify-center'>
                        {filteredProjects.map(p => <ProjectCard props={p} />)}
                </div>
        )
}

export default ProjectsCards;