import data from '../data.json'
import { useState } from 'react'
import Card from './Card'
import '../styles/main.css'

export default function Main() {
    const [region, setRegion] = useState('')
    const [searchText, setSearchText] = useState('')

    const handleSearch = event => {
        let text = event.target.value
        setSearchText(text)
    }

    const handleSelect = event => {
        let region = event.target.value
        setRegion(region)
    }

    return(
        <>
            <nav className='navbar'>
                <div className='searchbarContainer'>
                    <div className='searchIconContainer'>
                        <i className='fa fa-search'></i>
                    </div>
                    <input className='searchbar' onChange={handleSearch}></input>
                </div>
                <div className='selectContainer'>
                    <select value={region} onChange={handleSelect}>
                        <option disabled={true} value=''>Filter by Region</option>
                        <option value='Africa'>Africa</option>
                        <option value='Americas'>America</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
                </div>
            </nav>
            <div className='cardGrid'>
                {region === '' ? 
                    data.filter(data => (data.name.toLowerCase().includes(searchText.toLowerCase()))).map(filteredData => (
                        <Card obj={filteredData} key={filteredData.name} />
                    ))
                : 
                    data.filter(data => (data.name.toLowerCase().includes(searchText.toLowerCase()) && data.region === region)).map(filteredData => (
                        <Card obj={filteredData} key={filteredData.name} />
                    ))
                }
            </div>
        </>
    )
}
