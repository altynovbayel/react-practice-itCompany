import React from 'react'
import cls from '../header/Header.module.scss'
import arrow from '../../../image/seo_banner_arrow.svg'

export default function Header() {
  return (
    <div>
      <div className={cls.banner}>
        <div className={cls.container}>
          <div className={cls.text}>
            <p>Главная</p>
            <img src={arrow} alt="" />
            <p>SEO</p>
          </div>
          <h1 className={cls.title}>SEO-продвижение сайтов</h1>
        </div>
      </div>
    </div>
  )
}
