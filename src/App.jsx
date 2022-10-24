import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'

//Componentes estructurales
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//Componentes de utilidad
import Loader from './components/Utils/Loader/Loader'


function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [])

  return (
    (loaded)
      ?
      <>
        <div className='min-h-screen h-full'>
          <Header/>
        </div>
        <main className='h-auto'>
          

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
