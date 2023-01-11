
import Button from '../../Utils/Button/Button';
import { useTranslation } from "react-i18next";

const AboutLinks = () => {

    const { t } = useTranslation();

    return (
        <div id="about_links" className='flex flex-col gap-4'>
            <Button style="midtransp" title={t('titulos.2')} href="#SoftSkills"></Button>
            <Button style="midtransp" title={t('titulos.3')} href="#HardSkills"></Button>
            <Button style="midtransp" title={t('titulos.4')} href="#Projects"></Button>
        </div>
    )
}

export default AboutLinks