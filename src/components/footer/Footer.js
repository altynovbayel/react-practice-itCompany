import React from 'react'
import cls from '../footer/Footer.module.scss'
import logo from '../../image/navlogopng.png'
import { navList } from '../../utils/List'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className={cls.footer}>
        <div className={cls.container}> 
          <div className={cls.top_nav}>
            <img src={logo} alt="" />
            <p>+7 (909) 858-15-62</p>
          </div>
          <ul className={cls.navList}>
            {
              navList.map(item => {
                return(
                  <li key={item.id}>
                    <Link className={cls.link} to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul> 
          <p className={cls.bottom}>Два Сервиса © 2020-2022</p>
        </div>
      </div>
    </div>
  )
}
