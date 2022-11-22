
import Button from '../../Utils/Button/Button';

const AboutLinks = () => {
    return (
        <div id="about_links" className='flex flex-col gap-4'>
            <Button style="midtransp" title="Habilidades" href="#SoftSkills"></Button>
            <Button style="midtransp" title="Conocimiento" href="#HardSkills"></Button>
            <Button style="midtransp" title="Proyectos" href="#Projects"></Button>
        </div>
    )
}

export default AboutLinks