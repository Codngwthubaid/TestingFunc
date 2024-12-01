import './App.css'
import React from 'react'
import HeroSection from './components/HeroSection'
import Destination from './components/Destination'

function App() {
  return (
    <>
      <main className='container mx-auto'>
        <article>
          <section>
            <HeroSection />
          </section>
          <section>
            <Destination />
          </section>
        </article>
      </main>
    </>
  )
}

export default App
