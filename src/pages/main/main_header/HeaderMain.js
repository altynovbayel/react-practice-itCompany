import React from 'react'
import cls from './Header.module.scss'

export default function HeaderMain() {
  return (
    <div>
      <div className={cls.banner_text}>
        <div className={cls.container}>
          <h4>
            IT компания - Два Сервиса
          </h4>
          <h1>
            Создание и продвижение сайтов
          </h1>
          <p>
            + Разработка
          </p>
          <p>
            + Комплексное продвижение
          </p>
          <p>
            + Юридическая защита
          </p>
        </div>
      </div>
    </div>
  )
}
