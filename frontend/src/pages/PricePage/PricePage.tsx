import { useEffect, useState } from 'react'
import { ButtonWithImage } from '../../components/ButtonWithImage'
import { Loading } from '../../components/Loading'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import dopoptions from '../../images/carsTypes/dop.png'
import minibus from '../../images/carsTypes/minibus.png'
import passangers from '../../images/carsTypes/passangers.png'
import suv from '../../images/carsTypes/sav.png'
import { fetchPrice } from '../../store/slices/priceSlice'
import { PriceCard } from './PriceCard'
import styles from './PricePage.module.scss'

type DataNavigateType = {
  id: number
  path: string
  name: string
  image: string
}
const dataNavigate: DataNavigateType[] = [
  {
    id: 1,
    path: '/passanger',
    name: 'легковые',
    image: passangers,
  },
  {
    id: 2,
    path: '/suv',
    name: 'внедорожники',
    image: suv,
  },
  {
    id: 3,
    path: '/minibus',
    name: 'микроавтобусы',
    image: minibus,
  },
  {
    id: 4,
    path: '/dopprice',
    name: 'доп. услуги',
    image: dopoptions,
  },
]

export const PricePage = () => {
  const { isLoading, error, priceList } = useAppSelector((state) => state.price)
  const dispatch = useAppDispatch()
  const [activeTypeCar, setActiveTypeCar] = useState<number>(1)

  const handleClickNewPrice = (id: number) => {
    setActiveTypeCar(id)
  }

  useEffect(() => {
    dispatch(fetchPrice(dataNavigate[activeTypeCar - 1].path))
  }, [dispatch, activeTypeCar])

  return (
    <div className={styles.pricePage}>
      <div className={styles.navigate}>
        {dataNavigate.map((btn) => (
          <ButtonWithImage
            key={btn.id}
            active={activeTypeCar}
            {...btn}
            handleClick={handleClickNewPrice}
          />
        ))}
      </div>

      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <div className={styles.price}>
          {!error &&
            !isLoading &&
            priceList.map(({ _id, ...element }) => (
              <PriceCard key={_id} data={element} />
            ))}
        </div>
      )}
    </div>
  )
}
