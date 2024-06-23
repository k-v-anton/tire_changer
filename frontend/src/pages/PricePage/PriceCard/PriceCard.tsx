import { memo } from 'react'
import { PriceCardProps } from './PriceCard.Types'
import styles from './PriceCard.module.scss'

export const PriceCard = memo((props: PriceCardProps) => {
  const { radius, ...data } = props.data

  return (
    <div className={styles.priceCard}>
      <h2 className={styles.title}>{radius}</h2>

      <div className={styles.containerPrice}>
        {Object.values(data).map((el) => {
          return (
            <div className={styles.itemContainer} key={el._id}>
              <p>{el.description}</p>
              <p>{el.price} руб.</p>
            </div>
          )
        })}
      </div>
    </div>
  )
})
