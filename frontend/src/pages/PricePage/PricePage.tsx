import { useEffect, useState } from 'react'
import { ButtonWithImage } from '../../components/ButtonWithImage'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import dopoptions from '../../images/carsTypes/dop.png'
import minibus from '../../images/carsTypes/minibus.png'
import passangers from '../../images/carsTypes/passangers.png'
import suv from '../../images/carsTypes/sav.png'
import { SkiletonPrice } from '../../skiletons/SkiletonPrice'
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
        <div className={styles.navContainer}>
          {dataNavigate.map((btn) => (
            <ButtonWithImage
              key={btn.id}
              active={activeTypeCar}
              {...btn}
              handleClick={handleClickNewPrice}
            />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        {isLoading && <SkiletonPrice />}
        {error && <p>{error}</p>}
        {!isLoading&& !error && priceList.length && (
          <div className={styles.price}>
            {priceList.map(({ _id, ...element }, index: number) => (
              <PriceCard key={_id} data={element} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
