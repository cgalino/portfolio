import { useState } from 'react';
import MenuDesktop from './MenuDesktop';
import HardSkillsCardDesktop from './HardSkillsCardDesktop';

const HardSkillsDesktop = () => {
	const [view, setView] = useState(1);

	return (
		<div id="hardskills_main" className="flex flex-row items-center gap-20 justify-center flex-wrap py-5">
			<div id="about_sidebar" className='flex flex-col gap-16'>
				<MenuDesktop view={view} setView={setView} />
			</div>
			<div className='w-full xl:w-2/3'>
				<HardSkillsCardDesktop skill={view} />
			</div>
		</div>
	);
};

export default HardSkillsDesktop;