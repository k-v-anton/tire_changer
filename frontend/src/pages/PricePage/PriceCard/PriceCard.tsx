import { memo } from 'react'
import { PriceCardProps } from './PriceCard.Types'
import styles from './PriceCard.module.scss'

export const PriceCard = memo((props: PriceCardProps) => {
  const {
    index,
    data: { radius, ...data },
  } = props

  return (
    <div
      className={styles.priceCard}
      style={{
        animationDelay: `${index * 0.3}s`,
      }}
    >
      <h2 className={styles.title}>{radius}</h2>
      <div className={styles.containerPrice}>
        {Object.values(data).map((el) => {
          return (
            <div className={styles.itemContainer} key={el._id}>
              <p className={styles.text}>{el.description}</p>
              <p className={styles.text}>{el.price} руб.</p>
            </div>
          )
        })}
      </div>
    </div>
  )
})
