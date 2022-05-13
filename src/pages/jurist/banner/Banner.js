import React from 'react'
import cls from './Banner.module.scss'
import arrow from '../../../image/seo_banner_arrow.svg'

export default function Banner() {
  return (
    <div>
      <div className={cls.banner}>
        <div className={cls.container}>
          <div className={cls.text}>
            <p>Главная</p>
            <img src={arrow} alt="" />
            <p>Юридическая защита</p>
          </div>
          <h1 className={cls.title}>Юридическая защита</h1>
        </div>
      </div>
    </div>
  )
}
