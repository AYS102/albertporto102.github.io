import profilePicture from '../Assests/Untitled-1.png'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import '../Styles/Header.css'
function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h3>Albert Yehezkiel Sitanggang</h3>
            <p>Grapfic Designer - 3D Animator</p>
            <div className='socialMedia'>
              <a href=''><FaInstagram /></a>
              <a href=''><FaLinkedin /></a>
            </div>
        </div>
    </header>
  )
}

export default Header