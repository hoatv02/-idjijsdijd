import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterHome from '../components/UI/Footer/HomeFooter/FooterHome'
import HeaderHome from '../components/UI/Header/HeaderHome/HeaderHome'

const layouts = () => {
  return (
    <div>
      <HeaderHome />
      {Outlet}
      <FooterHome />
    </div>
  )
}

export default layouts
