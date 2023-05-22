import logoNode from './assets/img/logo_node.svg'
import './App.css'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
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
        </div>
    )
}

export default App
