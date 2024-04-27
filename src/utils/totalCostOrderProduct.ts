import { IOrder } from 'src/types'

export function calculateTotalCostOrderProduct (orders: IOrder[]) {
  const totalCost = {
    USD: 0,
    UAH: 0
  }

  orders?.forEach(order => {
    const orderTotalUSD = order?.products?.reduce((acc, product) => {
      if (product?.price.some(price => price.symbol === 'USD')) {
        return acc + product.price.find(price => price.symbol === 'USD')?.value!
      }
      return acc
    }, 0)

    const orderTotalUAH = order?.products?.reduce((acc, product) => {
      if (product?.price.some(price => price.symbol === 'UAH')) {
        return acc + product.price.find(price => price.symbol === 'UAH')?.value!
      }
      return acc
    }, 0)

    totalCost.USD += orderTotalUSD
    totalCost.UAH += orderTotalUAH
  })

  return totalCost
}
