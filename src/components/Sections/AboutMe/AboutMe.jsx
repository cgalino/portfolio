function AboutMe() {

    return (
        <section id="about" className="mb-20 space-x-20 overflow-hidden sm:mb-32 sm:space-y-32 md:mb-40 md:space-y-40">
            <div className="about showOn">
                <div className="title">
                    <span className="secondary">1.</span>
                    <h2>Conóceme!</h2>
                </div>
                <div id="about_main" className="flex flex-row items-center gap-8">
                    <div id="about_sidebar">
                        <div id="about_foto">foto</div>
                        <div id="about_links">links</div>
                    </div>
                    <div id="about_text">
                        <div id="about_card" className="card">
                            <h3>¡Bienvenido!</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;