import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import './styles/sections.css'

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
    }, 500);
    return () => clearTimeout(timer);
  }, [])

  return (
    (loaded)
      ?
      <div className='flex flex-col min-h-screen justify-between'>
        <div className='h-full mb-10 space-y-10 overflow-hidden'>
          <Header/>
        </div>
        <main className=''>
          <AboutMe />

        </main>
        <Footer />
      </div>
      :
      <div className='flex h-screen'>
        <Loader />
      </div>
  )
}

export default App
