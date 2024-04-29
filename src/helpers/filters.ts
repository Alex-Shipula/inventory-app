import { IOrder, IProduct } from 'src/types'

const productsFilter = (type: string, specification: string, allProducts: IProduct[] | undefined) => {
  const filteredByType = allProducts?.filter((item) => {
    if (type === 'all') {
      return item
    } else if (type === item.type) {
      return item
    } else if (type === 'new' && item?.isNew === 1) {
      return item
    } else if (type === 'old' && item?.isNew === 0) {
      return item
    }
  })

  const filteredBySpecification = filteredByType?.filter((item) => {
    return item?.title.toLowerCase().includes(specification.toLowerCase())
  })

  return filteredBySpecification ?? allProducts
}

const ordersFilter = (type: string, allOrders: IOrder[] | undefined) => {
  const filteredByType = allOrders?.filter((item) => {
    if (type === 'all') {
      return item
    } else if (type === item.title) {
      return item
    } else if (type === '') {
      return item
    }
  })

  return filteredByType ?? allOrders
}

export { productsFilter, ordersFilter }
