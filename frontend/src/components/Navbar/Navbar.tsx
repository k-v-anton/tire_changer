import { MouseEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { close } from '../../store/slices/hamburgerSlice'
import styles from './Navbar.module.scss'

type NavbarPropsType = {
  children: JSX.Element | JSX.Element[] | null
}
export const Navbar = (props: NavbarPropsType) => {
  const { children } = props
  const hamburgerState = useAppSelector((state) => state.hamburger)
  const dispatch = useAppDispatch()
  const handleClickNavbar = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return
    if (e.target.id !== 'navigate') return
    dispatch(close())
  }

  return (
    <nav
      id='navigate'
      onClick={handleClickNavbar}
      className={`${styles.navbar} ${
        hamburgerState.active ? styles.active : ''
      }`}
    >
      <div className={styles.container}>{children}</div>
    </nav>
  )
}
