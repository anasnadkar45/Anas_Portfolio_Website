import './App.css'
import ContactMe from './components/shared/ContactMe'
import HeroSection from './components/shared/HeroSection'
import Navbar from './components/shared/Navbar'
import Projects from './components/shared/Projects'
import Skills from './components/shared/Skills'
import './index.css'


function App() {

  return (
    <>
      <div className='space-grotesk bg-black min-h-[400vh]'>
        <div className='bg-black  bg-dot-white/[0.2] relative'>
          <div className='max-w-7xl mx-auto sm:px-5 pb-10'>
            <Navbar />
            <HeroSection />
          </div>

          <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-7 left-0 
          xl:bottom-0 w-full'></div>

        </div>
        <div className='max-w-7xl mx-auto sm:px-5 '>
          <Skills />
          <Projects />
          <ContactMe />
        </div>
      </div>
    </>
  )
}

export default App
