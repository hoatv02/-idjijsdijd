import React from 'react'
import NavbarHomePage from './NavbarHomePage/NavbarHomePage'
import styles from './HomePage.module.css'
// import User from '../../../components/UI/User/User'
const HomePages = () => {
  return (
    <div className={`${styles.containerHome}`}>
      <div className={styles.NavbarHome}>
        <NavbarHomePage />
      </div>
      {/* <User /> */}
    </div>
  )
}
export default HomePages
