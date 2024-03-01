import '../styles/card.css'

export default function Card(props) {
    return(
        <article onClick={() => {
            window.location.href='./CountryPage'
        }} className='cardContainer'>
            <img className='cardImage' src={props.obj.flag}></img>
            <div className='cardText'>
                <h5>{props.obj.name}</h5>
                <ul>
                    <li><b>Population: </b>{props.obj.population}</li>
                    <li><b>Region: </b>{props.obj.region}</li>
                    <li><b>Capital: </b>{props.obj.capital}</li>
                </ul>
            </div>
        </article>
    )
}