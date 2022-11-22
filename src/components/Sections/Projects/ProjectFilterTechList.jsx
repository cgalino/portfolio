import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import techs from '../../../data/techs'


function ProjectFilterTechList({ tech, setTech }) {

    return (
        <Listbox value={tech} onChange={setTech}>
            <Listbox.Button>{tech.name}</Listbox.Button>
            <Listbox.Options>
                {techs.map((tech) => (
                    <Listbox.Option
                        key={tech.id}
                        value={tech}
                        disabled={tech.unavailable}
                    >
                        {tech.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default ProjectFilterTechList;