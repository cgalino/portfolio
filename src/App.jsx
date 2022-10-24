import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import './styles/Sections.css'

//Componentes estructurales
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//Secciones de la página
import AboutMe from './components/Sections/AboutMe/AboutMe'

//Componentes de utilidad
import Loader from './components/Utils/Loader/Loader'


function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [])

  return (
    (loaded)
      ?
      <>
        <div className='min-h-screen h-full'>
          <Header/>
        </div>
        <main className='py-6 px-4 sm:p-6 md:py-10 md:px-8'>
          <AboutMe />

        </main>
        <Footer />
      </>
      :
      <div className='flex h-screen'>
        <Loader />
      </div>
  )
}

export default App
