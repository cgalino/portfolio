import './HardSkills.css';
import { useState } from 'react';
import useObserver from '../../Hooks/showObserver';
import Title from '../../Utils/SectionTitle/SectionTitle';

import MenuHardSkills from './HardSkillsMenu';
import HardSkillsCard from './HardSkillsCard';

const Skills = () => {
	const { ref: skillsRef } = useObserver();
	const [view, setView] = useState(1);

	return (
		<section id="HardSkills" className="mb-20 space-x-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
			<div className="HardSkills" ref={skillsRef}>
				<Title title="Conocimiento" number="3" />
				<div id="hardskills_main" className="flex flex-row items-start gap-10 md:gap-20 justify-center flex-wrap py-5">
					<div id="about_sidebar" className='flex flex-col gap-16'>
						<MenuHardSkills view={view} setView={setView} />
					</div>
					<div className='w-full md:w-2/3'>
						<HardSkillsCard skill={view} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;