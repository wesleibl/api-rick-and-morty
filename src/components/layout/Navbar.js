import Container from './Container'

import styles from '../css/Navbar.module.css'
import logo from '../../img/logo.jpeg'


function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar
