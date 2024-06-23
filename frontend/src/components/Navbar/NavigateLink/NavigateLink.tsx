import { NavLink } from 'react-router-dom'
import { NavigateLinkProps, SetActiveType } from './NavigateLink.Types'
import styles from './NavigateLink.module.scss'

export const NavigateLink = (props: NavigateLinkProps) => {
  const { path, name } = props
  console.log(path, name)

  const setActive: SetActiveType = ({ isActive }) => {
    return isActive
      ? `${styles.active} ${styles.navigateLink}`
      : styles.navigateLink
  }

  return (
    <NavLink to={path} className={setActive}>
      {name}
    </NavLink>
  )
}
