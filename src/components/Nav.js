import { useState } from 'react'
import '../styles/nav.css'

export default function Nav() {
    const [selected, setSelected] = useState('')
    const [sortType, setSortType] = useState('')

    const handleChange = event => {
        let val = event.target.value

        setSelected(val)

        if(val === "Africa"){
            alert('test')
        }
    }

    return(
        <nav className='navbar'>
            <div className='searchbarContainer'>
                <div className='searchIconContainer'>
                    <i className='fa fa-search'></i>
                </div>
                <input className='searchbar'></input>
            </div>
            <div className='selectContainer'>
                <select value={selected} onChange={handleChange}>
                    <option disabled={true} value=''>Filter by Region</option>
                    <option value='Africa'>Africa</option>
                    <option value='America'>America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </div>
        </nav>
    )
}