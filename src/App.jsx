import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Search from './components/SearchDiv/Search.jsx'
import Jobs from './components/JobDiv/Jobs.jsx'
import Value from './components/ValueDiv/Value.jsx'
import Footer from './components/FooterDiv/Footer.jsx'

const App = () => {
    return (
        <div className='m-auto bg-white'>
            <NavBar/>
            <Search/>
            <Jobs/>
            <Value/>
            <Footer/>
        </div>
    )
}

export default App
