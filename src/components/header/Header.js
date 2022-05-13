import React from 'react'
import cls from './Header.module.scss'
import {navList} from '../../utils/List'
import navlogo from '../../image/navlogopng.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={cls.header}>
      <div className={cls.container}>
        <div className={cls.navbar}>
          <img className={cls.nav_logo} src={navlogo} alt="" />
          <ul className={cls.nav_list}>
            {
              navList.map(item => {
                return(
                  <li key={item.id}>
                    <Link to={item.path} className={cls.link}>
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <p className={cls.phone}>+7 (909) 858-15-62</p>
          <div className={cls.header_burger}>
            <GiHamburgerMenu/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header