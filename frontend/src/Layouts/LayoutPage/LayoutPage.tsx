import { Outlet } from 'react-router'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { NavigateLink } from '../../components/Navbar/NavigateLink'

export const LayoutPage = () => {
  type LinkType = {
    id: number
    path: string
    name: string
  }

  const links: LinkType[] = [
    {
      id: 1,
      path: '/',
      name: 'home',
    },
    {
      id: 2,
      path: '/price',
      name: 'price',
    },
  ]
  

  return (
    <>
      <Header />
      <Navbar>
        {links.map(({ id, ...link }) => (
          <NavigateLink key={id} {...link} />
        ))}
      </Navbar>

      <Outlet />
    </>
  )
}
