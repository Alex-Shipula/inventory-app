import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import OrderPage from './OrderPage'
import { IOrder } from 'src/types'

const mockOrder: IOrder[] = [
  {
    id: '1',
    title: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
     с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
      с ведущими производителями, демонстрирует стремление к обеспечению потребителей
       передовыми решениями для улучшения визуального опыта и повышения производительности.`,
    date: '2021-10-01',
    description: 'Description 1',
    price: [
      {
        value: 0,
        symbol: 'USD',
        isDefault: 1
      },
      {
        value: 0,
        symbol: 'UAH',
        isDefault: 0
      }
    ],
    products: [
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
  }
]

const mockStore = configureStore([])
const initialState = {
  orders: [],
  products: []
}
const store = mockStore(initialState)

describe('OrderPage component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    )
    expect(screen.getByText('Приходы / 0')).toBeInTheDocument()
  })

  test('displays correct number of orders', () => {
    render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    )
    store.dispatch({ type: 'SET_ORDERS_STATE', payload: mockOrder })
    expect(screen.getByText('Приходы / 2')).toBeInTheDocument()
    mockOrder.forEach((order) => {
      expect(screen.getByText(order.title)).toBeInTheDocument()
    })
  })

  test('filter orders by type', () => {
    render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    )
    store.dispatch({ type: 'SET_ORDERS_STATE', payload: mockOrder })
    fireEvent.change(screen.getByPlaceholderText('Поиск по типу прихода'), {
      target: { value: 'Order 1' }
    })
    expect(screen.getByText('Приходы / 1')).toBeInTheDocument()
    expect(screen.getByText('Order 1')).toBeInTheDocument()
    expect(screen.queryByText('Order 2')).not.toBeInTheDocument()
  })
})
