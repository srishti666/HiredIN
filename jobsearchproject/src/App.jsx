import React from 'react'
import Footer from './Components/FooterDiv/Footer'
import Jobs from './Components/JobDiv/Jobs'
import NavBars from './Components/NavBars/NavBars'
import Search from './components/SearchDiv/Search'
import Value from './components/ValueDiv/Value'

const App = () => {
  return (
    <div>
     <NavBars/>
     <Footer/>
     <Jobs/>
     <Search/>
     <Value/>
     
    </div>
  )
}

export default App