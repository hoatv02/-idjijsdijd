import React from 'react'
import styles from './NavbarHomePage.module.css'

const NavbarHomePage = () => {
  return (
    <div className={styles.containerHome}>
      <div>
        <div className={`${styles.layoutHome}`}>
          <div className={`${styles.titleHomePage}`}>
            <span>Employees</span>
          </div>
          <div className={`${styles.search} `}></div>
        </div>
      </div>
    </div>
  )
}

export default NavbarHomePage
