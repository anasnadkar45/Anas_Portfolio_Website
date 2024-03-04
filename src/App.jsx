import './App.css'
import HeroSection from './components/shared/HeroSection'
import Navbar from './components/shared/Navbar'
import './index.css'


function App() {

  return (
    <>
      <div className='space-grotesk bg-black min-h-screen overflow-hidden'>
        <div className='bg-black  bg-grid-white/[0.05] relative'>
          <div className='max-w-7xl mx-auto sm:px-5 '>
            <Navbar />
            <HeroSection />
          </div>

          <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-7 left-0 
          xl:bottom-0 w-full'></div>

        </div>
      </div>
    </>
  )
}

export default App
