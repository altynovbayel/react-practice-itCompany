import React from 'react'
import cls from './About.module.scss'
import aboutImg from '../../../image/mainAboutImg.png'


export default function AboutMain() {
  return (
    <div>
      <div className={cls.container}>
        <div className={cls.img_block}>
          <img src={aboutImg} alt="" />
        </div>
        <div className={cls.text}>
          <h1>О нас</h1>
          <p>
            Два Сервиса — IT компания, которая занимается разработкой, комплексным продвижением и юридической защитой сайтов. Мы — это сложившаяся команда веб-разработчиков, SMM-специалистов, email-маркетологов, SEO-специалистов, юристов.
            В нашей команде решена задача взаимодействия разных сфер деятельности - IT технологий и юриспруденции.
          </p>
          <h3>
            Мы знаем, что нужно делать в интернете и знаем, что не нужно делать в интернете.
          </h3>
        </div>
      </div>
    </div>
  )
}
