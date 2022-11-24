import { useEffect } from 'react';
import { useState } from 'react';
import ProjectFilterTechList from './ProjectFilterTechList';
import ProjectFilterSearch from './ProjectFilterSearch';

const ProjectsFilter = ({ filters, setFilters }) => {

    const [search, setSearch] = useState(filters.search);
    const [techs, setTechs] = useState(filters.techs);

    useEffect(() => setFilters({ search, techs }), [search, techs]);

    return (
        <div className="flex flex-row justify-start flex-wrap-reverse w-full gap-2">
            <ProjectFilterTechList tech={techs} setTechs={setTechs} />
            <ProjectFilterSearch search={search} setSearch={setSearch} />
        </div>
    )
}

export default ProjectsFilter;