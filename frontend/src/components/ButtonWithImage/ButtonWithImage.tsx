import { ButtonWithImageProps } from './ButtonWithImage.Types'
import styles from './ButtonWithImage.module.scss'

export const ButtonWithImage = (props: ButtonWithImageProps) => {
  const { image, name, id, handleClick, active } = props

  return (
    <button
      className={`${styles.buttonWithImage} ${
        active === id ? styles.active : ''
      }`}
      data-id={id}
      onClick={() => handleClick(id)}
    >
      <img className={styles.image} src={image} alt='' />
      <span className={styles.description}>{name}</span>
    </button>
  )
}
