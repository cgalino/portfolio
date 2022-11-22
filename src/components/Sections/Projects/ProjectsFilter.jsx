import { useEffect } from 'react';
import { useState } from 'react';
import ProjectFilterTechList from './ProjectFilterTechList';
import ProjectFilterSearch from './ProjectFilterSearch';

const ProjectsFilter = ({ filters, setFilters }) => {

    const [search, setSearch] = useState(filters.search);
    const [techs, setTechs] = useState(filters.techs);

    useEffect(() => setFilters({ search, techs }), [search, techs]);

    return (
        <div className="flex flex-row justify-start flex-wrap w-full gap-2">
            <div>
                <div className="relative text-lg bg-transparent text-gray-800 w-48">
                    <ProjectFilterTechList tech={techs} setTechs={setTechs} />
                </div>
            </div>
            <div id="grow w-full">
                <div className="relative text-lg bg-transparent text-gray-800 w-96">
                    <ProjectFilterSearch search={search} setSearch={setSearch} />
                </div>
            </div>
        </div>
    )
}

export default ProjectsFilter;