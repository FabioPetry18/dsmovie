import {ReactComponent as GithubIcon} from '../../../Assets/img/github.svg';
import "./Style.css"

function Navbar() {
    return(
        <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSmovie</h1>
          <a href="https://github.com/FabioPetry18/">
            <div className='dsmovie-contact-container'>
              <GithubIcon/>
              <p className='dsmovie-contact-link'>/FabioPetry18</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    )
}

export default Navbar;