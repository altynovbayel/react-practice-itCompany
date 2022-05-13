import React from 'react'
import cls from '../partners/Partners.module.scss'
import { PartnersList } from '../../../utils/List'
import logo from '../../../image/partners_logo.png'

export default function Partners() {
  return (
    <div>
      <div className={cls.container}>
        <h1>
          Наши партнеры 
        </h1>
        <div className={cls.logo}>
          <ul>
            {
              PartnersList.map(item => {
                return (
                  <li key={item.id}>
                    <img src={logo} alt="" />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
