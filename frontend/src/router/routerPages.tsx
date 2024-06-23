import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { SkiletonPage } from '../skiletons/SkiletonPage'

const LazyLayoutPage = lazy(() =>
  import('../Layouts/LayoutPage').then(({ LayoutPage }) => ({
    default: LayoutPage,
  }))
)
const LazyHomePage = lazy(() =>
  import('../pages/HomePage').then(({ HomePage }) => ({
    default: HomePage,
  }))
)

const LazyPricePage = lazy(() =>
  import('../pages/PricePage').then(({ PricePage }) => ({ default: PricePage }))
)

const LazyErrorPage = lazy(() =>
  import('../pages/ErrorPage').then(({ ErrorPage }) => ({ default: ErrorPage }))
)

export const routerPages = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <LazyLayoutPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <LazyErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<SkiletonPage />}>
            <LazyHomePage />
          </Suspense>
        ),
      },

      {
        path: '/price',
        element: (
          <Suspense fallback={<SkiletonPage />}>
            <LazyPricePage />
          </Suspense>
        ),
      },
    ],
  },
])
