import { PriceType } from '../../../types/PriceType'

export type PriceCardProps = {
  data: Omit<PriceType, '_id'>
}
