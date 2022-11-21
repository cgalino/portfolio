import data from '../HardSkillsData';

const HardSkillsCardDesktop = ({ skill }) => {
	return (
		<div className="card drop-shadow-lg duration-200 lg:minh72">
			<h3>{data[skill].title}</h3>
			<p>{data[skill].desc}</p>
			<div className="flex flex-row justify-center pt-8 gap-4">
				{data[skill].images.map(el => {
					return (
						<img
							key={el.text}
							src={el.img}
							title={el.text}
							alt={el.text}
							className=" w-16"
						/>
					);
				})}
			</div>
		</div>
	);
};

export default HardSkillsCardDesktop;