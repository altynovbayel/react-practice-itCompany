import cls from '../cards/Cards.module.scss'
import { JuristCards } from '../../../utils/List'

export default function Cards(){
  return(
    <div>
      <div className={cls.title}>
        <h3>Нормы права регулирующие авторские права, в том числе на фотографии (только часть, выдержки):</h3>
      </div>
      <div className={cls.container}>
        {
          JuristCards.map(item => {
            return (
              <div className={cls.card} key={item.id}>
                <h3>{item.title}</h3>
                <div className={cls.text}>
                  <p>{item.text}</p>
                  
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}