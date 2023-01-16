import data from '../../../data/HardSkillsData';
import { useTranslation } from 'react-i18next';

const HardSkillsCard = ({ skill }) => {

	const { t } = useTranslation();

	let d = data.filter(e => e.id == skill)[0];

	return (
		<div className="card drop-shadow-lg lg:minh72">
			<div className="flex flex-col content-between gap-6">
				<h3>{t(`hardskills.${skill}.titulo`)}</h3>
				<p>{t(`hardskills.${skill}.descripcion`)}</p>
				<div className="flex flex-row justify-center pt-8 gap-8 flex-wrap">
					{d.images.map(el => {
						return (
							<img
								key={el.text}
								src={el.img}
								title={el.text}
								alt={el.text}
								className={"skills__img"}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HardSkillsCard;