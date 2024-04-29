import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ProductPage from './ProductPage'
import { IProduct } from 'src/types'

const mockProduct: IProduct[] = [
  {
    id: '1',
    serialNumber: 1234234238487,
    isNew: 1,
    photo: 'https://source.unsplash.com/random',
    title: 'Acer Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
    type: 'free',
    specification: 'XB271HU',
    guarantee: {
      start: '2021-10-01',
      end: '2023-10-01'
    },
    price: [
      {
        value: 100,
        symbol: 'USD',
        isDefault: 1
      },
      {
        value: 2500,
        symbol: 'UAH',
        isDefault: 0
      }
    ],
    date: '2021-10-01',
    orderId: '1',
    groupId: '1',
    groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
    orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
    с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
     с ведущими производителями, демонстрирует стремление к обеспечению потребителей
      передовыми решениями для улучшения визуального опыта и повышения производительности.`
  }
]

const mockStore = configureStore([])
const initialState = {
  orders: [],
  products: []
}
const store = mockStore(initialState)

describe('ProductPage component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    )
    expect(screen.getByText('Продукты / 0')).toBeInTheDocument()
  })

  test('displays correct number of products', () => {
    render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    )
    store.dispatch({ type: 'SET_PRODUCTS_STATE', payload: mockProduct })
    expect(screen.getByText('Продукты / 2')).toBeInTheDocument()
    mockProduct.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument()
      expect(screen.getByText(`SN-${product.serialNumber}`)).toBeInTheDocument()
    })
  })

  test('filter products by type', () => {
    render(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    )
    store.dispatch({ type: 'SET_PRODUCTS_STATE', payload: mockProduct })
    fireEvent.change(screen.getByPlaceholderText('Поиск по типу продукта'), {
      target: { value: 'Type 1' }
    })
    expect(screen.getByText('Продукты / 1')).toBeInTheDocument()
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument()
  })
})
