import './App.css'
import ContactMe from './components/shared/ContactMe'
import Footer from './components/shared/Footer'
import HeroSection from './components/shared/HeroSection'
import Navbar from './components/shared/Navbar'
import Projects from './components/shared/Projects'
import Skills from './components/shared/Skills'
import './index.css'


function App() {


  return (
    <>
      <div className='space-grotesk bg-black min-h-screen sm:min-w-full'>
        <div className='bg-black  bg-dot-white/[0.2] relative'>
          <div className='h-10 xl:h-32 bg-gradient-to-b from-black opacity-85 absolute top-0 left-0 
          xl:bottom-0 w-full'></div>
          <div className='max-w-7xl mx-auto sm:px-5 py-14'>
            <Navbar />
            <HeroSection />
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
          </div>
          <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-7 left-0 
          xl:bottom-0 w-full'></div>
        </div>

        <div className='max-w-7xl mx-auto sm:px-5 mt-10'>
          <div id="contact">
            <ContactMe />
          </div>
          <div id="footer">
            <Footer />
          </div>

        </div>

      </div>
    </>
  )
}

export default App
