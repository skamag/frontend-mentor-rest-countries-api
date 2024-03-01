import { useState } from 'react'
import '../styles/header.css'

export default function Header({ darkMode, setDarkMode }) {
    function handleClick() {
        !darkMode ? setDarkMode(true) : setDarkMode(false)
    }

    return(
        <div className={`headerContainer ${darkMode ? 'darkModeHeader' : 'lightModeHeader'}`}>
            <h2>Where in the world?</h2>
            <div className='darkModeButton' onClick={handleClick}>
                <div>
                    <i className='fa fa-moon-o'></i>
                </div>
                <div>
                    {darkMode ? <p>Dark Mode</p> : <p>Light Mode</p>}
                </div>
            </div>
        </div>
    )
}