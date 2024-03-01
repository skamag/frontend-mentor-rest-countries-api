import '../styles/header.css'

export default function Header() {
    return(
        <div className='headerContainer'>
            <h2>Where in the world?</h2>
            <div className='darkMode' onClick={() => {alert('Under development')}}>
                <div>
                    <i className='fa fa-moon-o'></i>
                </div>
                <div>
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}