
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Footer(){
    return(
        <>
          <Router>
              <ul className="container">
                  <li className="foo">
                      <Link to='/'>
                          <i class="fas fa-home"></i>
                          <span>Acceuil</span>
                      </Link>
                  </li>
              </ul>
          </Router>
        </>
    )
}

export default Footer