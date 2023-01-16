import { useState, useEffect, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

import data from '../../../data/ProjectsData'


const ProjectsCards = ({ filters }) => {

        const { t, i18n } = useTranslation();

        const transformData = () => {
                let newData = data.map(obj => {
                        return {
                                ...obj,
                                name: t(`projects.data.${obj.key}.nombre`),
                                title: t(`projects.data.${obj.key}.titulo`),
                                body: t(`projects.data.${obj.key}.body`),
                                searchText: `${t(`projects.data.${obj.key}.nombre`)} ${t(`projects.data.${obj.key}.titulo`)} ${t(`projects.data.${obj.key}.body`)}`.toUpperCase()
                        }
                });
                return newData;
        }

        const [pd, setPd] = useState(transformData());

        const handleLanguageChanged = useCallback(() => {
                setPd(transformData());
        }, []);

        useEffect(() => {
                filterProjects(pd);
        }, [pd]);

        useEffect(() => {
                i18n.on('languageChanged', handleLanguageChanged);
                return () => {
                        i18n.off('languageChanged', handleLanguageChanged);
                };
        }, [handleLanguageChanged]);

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
                        {(filteredProjects.length > 0)
                                ? filteredProjects.map(p => <ProjectCard props={p} />)
                                : <h3 className='h-60 flex items-center'><span className=''>No hay datos</span></h3>
                        }
                </div>
        )
}

export default ProjectsCards;