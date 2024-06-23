type WorkType = {
  description: string
  price: number
  _id: string
}

export type PriceType = {
  _id: string
  radius: string
  removingWheel: WorkType
  installingWhell: WorkType
  unmountingFromDisk: WorkType
  mountingOnDisk: WorkType
  balancingWheel: WorkType
  complexOneWheel: WorkType
  complexFourWheel: WorkType
}