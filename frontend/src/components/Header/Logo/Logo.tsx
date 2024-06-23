import { Link } from 'react-router-dom'
import logoImage from '../../../images/img/logo.png'
import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <Link to={'/'} className={styles.logo}>
        <img src={logoImage} className={styles.image} alt='' />
    </Link>
  )
}
