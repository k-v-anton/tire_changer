import styles from './SkiletonPrice.module.scss'

export const SkiletonPrice = () => {
  return (
    <div className={styles.skiletonPrice}>
      {[...Array(10)].map((_, index: number): JSX.Element => {
        return (
          <span className={styles.item} key={index}>
            <span className={styles.titleLine} />
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
          </span>
        )
      })}
    </div>
  )
}
