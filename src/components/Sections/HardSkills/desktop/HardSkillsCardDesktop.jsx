import data from '../HardSkillsData';

const HardSkillsCardDesktop = ({ skill }) => {
	
	let d = data.filter(e => e.id == skill)[0];

	return (
		<div className="card drop-shadow-lg duration-200 lg:minh72">
			<div className="flex flex-col content-between gap-6">
				<h3>{d.title}</h3>
				<p>{d.desc}</p>
				<div className="flex flex-row justify-center pt-8 gap-8 flex-wrap">
					{d.images.map(el => {
						return (
							<img
								key={el.text}
								src={el.img}
								title={el.text}
								alt={el.text}
								className={"w-12 w-full"}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HardSkillsCardDesktop;