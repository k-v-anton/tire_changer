import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { LayoutPage } from '../Layouts/LayoutPage'
import { Loading } from '../components/Loading'
import { HomePage } from '../pages/HomePage'

const LazyPricePage = lazy(() =>
  import('../pages/PricePage').then(({ PricePage }) => ({ default: PricePage }))
)

const LazyErrorPage = lazy(() =>
  import('../pages/ErrorPage').then(({ ErrorPage }) => ({ default: ErrorPage }))
)

export const routerPages = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: (
      <Suspense fallback={<Loading />}>
        <LazyErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },

      {
        path: '/price',
        element: (
          <Suspense fallback={<Loading />}>
            <LazyPricePage />
          </Suspense>
        ),
      },
    ],
  },
])
