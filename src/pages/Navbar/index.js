import React from 'react'
import style from './navbar.module.sass'

import logo from '../..//imgs/logo.jpeg'

const Navbar = () => {
  return (
    <div>

      <div  className={style.nav}>
      <div> <img className={style.imgnav} src={logo} alt=""/></div>


      <div className={style.home}>
        <div>Home</div>
        <div>About</div>
        <div>Products</div>
        <div>Prices</div>
        <div>App</div>
        <button className={style.button}>Login</button>
        <button className={style.button}>Creat Account</button>
        </div>
        


      </div>
      
    </div>
  )
}

export default Navbar
