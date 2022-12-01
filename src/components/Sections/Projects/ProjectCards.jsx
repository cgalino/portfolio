import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

import data from '../../../data/ProjectsData'


const ProjectsCards = ({ filters }) => {

        let pd = data.map(obj => ({ ...obj, searchText: `${obj.name} ${obj.body}`.toUpperCase() }))

        const [filteredProjects, setFilteredProjects] = useState(pd);

        const filterSearch = (f) => f.searchText.includes(filters.search);
        const filterTechs = (f) => f.techs.map(e => filters.techs.includes(e));

        const filterProjects = () => {
                let fp = [...pd];
                if (filters.filterSearch) fp = fp.filter(f => filterSearch(f));
                if (filters.filterTechs) fp = fp.filter(f => filterSearch(f));
                console.log(fp);
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