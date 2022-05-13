import cls from '../cards/Cards.module.scss'
import img from '../../../image/seo_img.png'
import { SeoCards } from '../../../utils/List'

export default function Cards() {
  return(
    <div>
      <div className={cls.container}>
          {
            SeoCards.map(item => {
              return(
                <div className={cls.card} key={item.id}>
                  <img src={img} alt="" />
                  <p>{item.title}</p>
                </div>
              )
            })
          } 
      </div>
    </div>
  )
}