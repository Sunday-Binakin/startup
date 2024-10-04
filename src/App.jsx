 
import './App.css'
import Features from './components/Features'
import Form from './components/Form'

function App() {
  

  return (
    <>
       <header>
        <nav className="navbar">
          <div className="nav-icon"><a className='startup-text' href="#">Startup</a></div>
          <div className="nav-list">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
              <li><a className='join-us-button' href="">Join Us</a></li>
            </ul>
          </div>
        </nav>
       </header>
       <Features/>
       <Form/>
    </>
  )
}

export default App
