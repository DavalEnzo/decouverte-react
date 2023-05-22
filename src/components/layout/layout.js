{/* Component qui possède l'entête et le footer en react */}
import logoNode from "../../assets/img/logo_node.svg"
const Layout = ({children}) => {
    return (
        <>
        <header className="App-header">
        <img src={logoNode} className='App-logo' alt='logo' />
        <p className='waveTextAnimated'>
            <span>T</span>
            <span>e</span>
            <span>s</span>
            <span>t</span>
        </p>
        <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
        >
            Learn React
        </a>
        </header>
        <main>
            <p>{children}</p>
        </main>
        <footer>
            Enzo Daval 2023
        </footer>
        </>
    )
}

export default Layout
