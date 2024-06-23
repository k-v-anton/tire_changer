import styles from './Loading.module.scss'

export const Loading = () => {
  return (
    <span className={styles.container}>
      <span className={styles.loader}></span>
    </span>
  )
}
