import styles from '../../styles/Home.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <h1>Team Forcier</h1>
            </div>
            <div className={styles.navlinks}>
                  <p>Featured Properties</p>
                  <p>All Properties</p>
                  <p>About us</p>
            </div>
        </div>
    )
}

export default NavBar;
