import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import NavLinks from '../Navigation/NavLinks'
import SideBar from '../Navigation/SideBar'
import './MainNavigation.css'


const MainNavigation = () => {

  return (
    <>
    <SideBar>
      <nav className="main-navigation__drawer-nav">
        <NavLinks/>
      </nav>
    </SideBar>
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your places</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks/>
      </nav>
    </MainHeader>
    </>

  )
}

export default MainNavigation
