import { useState } from 'react'
import Header from './Header'
import Main from './Main'

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    return(
        <>
            <div className='header'>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <main className={darkMode ? 'darkModeMain' : ''}>
                <Main darkMode={darkMode} setDarkMode={setDarkMode} />
            </main>
        </>
    )
}