import { PriceType } from '../../../types/PriceType'

export type PriceCardProps = {
  index: number
  data: Omit<PriceType, '_id'>
}
