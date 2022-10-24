import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Loader from './components/Utils/Loader/Loader'
import { useEffect } from 'react'
import { useState } from 'react'

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
        <div className='min-h-screen h-full header-bg '>
          <Header />
        </div>
        <main>
          {/* Conóceme */}

        </main>
        <Footer />
      </>
      :
      <div className='flex h-screen header-bg'>
        <Loader />
      </div>
  )
}

export default App
