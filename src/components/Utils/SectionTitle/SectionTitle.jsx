import './SectionTitle.css'
import { useTranslation } from "react-i18next";

const SectionTitle = (props) => {

    const { t } = useTranslation();

    return (
        <div className="title text-xl md:text-2xl lg:text-3xl">
            <span className="secondary">{props.number}</span>
            <h2>  {t('titulos.' + props.number)}</h2>

        </div>
    )
}

export default SectionTitle;