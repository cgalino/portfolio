import './HardSkills.css';
import useObserver from '../../Hooks/showObserver';
import Title from '../../Utils/SectionTitle/SectionTitle';
import HardSkillsDesktop from './desktop/HardSkillsDesktop';
// import HardSkillsMobile from './mobile/HardSkillsMobile';

const Skills = () => {
	const { ref: skillsRef } = useObserver();

	return (
		<section id="HardSkills" className="mb-20 space-x-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
			<div className="HardSkills" ref={skillsRef}>
				<Title title="Conocimiento" number="3" />
				<HardSkillsDesktop />
				{/* <HardSkillsMobile /> */}
			</div>
		</section>
	);
};

export default Skills;