import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const techs = [
    { id: 1, name: 'React', unavailable: false },
    { id: 2, name: 'Jquery', unavailable: false },
    { id: 3, name: 'Bootstrap', unavailable: false },
    { id: 4, name: 'Material', unavailable: false },
    { id: 5, name: 'Tailwind', unavailable: true },
    { id: 6, name: 'Java', unavailable: false },
    { id: 7, name: 'MySql', unavailable: false },
]

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