import Header from './Header'
import Main from './Main'

export default function Home() {
    return(
        <>
            <div className='header'>
                <Header />
            </div>
            <main>
                <Main />
            </main>
        </>
    )
}