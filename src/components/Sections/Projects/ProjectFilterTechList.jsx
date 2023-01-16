import { Fragment, useEffect } from 'react';

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next';

import techs from '../../../data/techs'

function ProjectFilterTechList({ tech, setTechs }) {

    const { t } = useTranslation();

    let techNames = tech.map((t) => techs.filter((e) => t == e.id).map(x => x.name)).join(', ');

    const techListChange = (e) => {
        let t = [...tech];

        t.indexOf(e) != -1
            ? t.splice(t.indexOf(e), 1)
            : t.push(e);
        setTechs(t);
    }

    useEffect(() => { techNames = tech.map((t) => techs.filter((e) => t == e.id).map(x => x.name)).join(', ') }, [tech]);

    return (
        <Listbox value={tech} onChange={(e) => techListChange(e)} className="relative min-w-fit text-gray-100 bg-mid-light-transparent border-2 rounded-xl border-gray-600 py-2 w-full md:w-96">
            <div className="mt-1">
                <Listbox.Button className="w-full h-8 pl-3 pr-10 text-left sm:text-sm">
                    <span className={!techNames && "text-gray-400" + " block truncate"}>{techNames || t('projects.filtrotecnologia')}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center mr-3">
                        <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute w-full z-10 mt-4 overflow-auto rounded-xl bg-project-gradient py-1 w-full text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {techs.map((t) => (
                            <Listbox.Option
                                key={t.id}
                                className={({ active }) =>
                                    `cursor-pointer relative text-gray-100 select-none py-2 text-left pl-10 pr-3  ${active ? 'bg-secondary' : ''
                                    }`}
                                value={t.id}>

                                {(tech.indexOf(t.id) > -1) ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                ) : null}

                                <span className={`block w-full text-gray-100 truncate ${(tech.indexOf(t.id) > -1) ? 'font-bold' : ''}`}>
                                    {t.name}
                                </span>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default ProjectFilterTechList;