
export interface IOrder {
  id: string
  title: string
  date: string
  description: string
  products: IProduct[]
}

export interface IProduct {
  id: string
  serialNumber: number
  isNew: number
  photo: string
  title: string
  type: string
  specification: string
  guarantee: {
    start: string
    end: string
  }
  price: IPrice[]
  date: string
  orderId: string
  groupId: string
  groupTitle: string
  orderTitle: string
}

export interface IPrice {
  value: number
  symbol: 'USD' | 'UAH'
  isDefault: number
}

export interface IGroup {
  id: string
  title: string
  description: string
  products: IProduct[]
}
