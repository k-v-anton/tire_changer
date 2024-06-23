import { Hamburger } from './Hamburger'
import styles from './Header.module.scss'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Hamburger />
      </div>
    </div>
  )
}
