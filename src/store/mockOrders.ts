import { IOrder } from 'src/types'

export const mockOrders: IOrder[] = [
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
      },
      {
        id: '2',
        serialNumber: 22332434234322,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Samsung Odyssey G7 27" WQHD 240Hz Curved Gaming Monitor',
        type: 'free',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 200,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 5000,
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
      },
      {
        id: '3',
        serialNumber: 3234234234324,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'Xiaomi Mi Curved Gaming Monitor 34" WQHD 144Hz',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 300,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 7500,
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
      },
      {
        id: '4',
        serialNumber: 4234682638472374,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Sony PlayStation 5',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 400,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 10000,
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
      },
      {
        id: '5',
        serialNumber: 523848273648253,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'Xiaomi Mi Curved Gaming Monitor 34" WQHD 144Hz',
        type: 'free',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 500,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 12500,
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
  },
  {
    id: '2',
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
        id: '6',
        serialNumber: 623423423923897,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Samsung Odyssey G7 27" WQHD 240Hz Curved Gaming Monitor',
        type: 'repair',
        specification: '',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 600,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 15000,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '2',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '7',
        serialNumber: 7238472936497326,
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
            value: 700,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 17500,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '2',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '8',
        serialNumber: 823847298364876,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'LG UltraGear 27GN950-B 27" 4K UHD Nano IPS G-Sync 144Hz',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 800,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 20000,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '2',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '9',
        serialNumber: 923987298638753,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'Asus Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
        type: 'free',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 900,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 22500,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '2',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '10',
        serialNumber: 102398472983472,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Sony PlayStation 5',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1000,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 25000,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '2',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      }
    ]
  },
  {
    id: '3',
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
        id: '11',
        serialNumber: 112398472983472,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'Asus Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
        type: 'free',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1100,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 27500,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '3',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '12',
        serialNumber: 122398472983472,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Xiaomi Mi Curved Gaming Monitor 34" WQHD 144Hz',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1200,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 30000,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '3',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '13',
        serialNumber: 132398472983472,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'Asus Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
        type: 'free',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1300,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 32500,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '3',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '14',
        serialNumber: 142398472983472,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Samsung Odyssey G7 27" WQHD 240Hz Curved Gaming Monitor',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1400,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 35000,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '3',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '15',
        serialNumber: 152398472983472,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'PanaSonic 27" WQHD IPS G-Sync 165Hz',
        type: 'free',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1500,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 37500,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '3',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      }
    ]
  },
  {
    id: '4',
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
        id: '16',
        serialNumber: 162398472983472,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Asus Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1600,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 40000,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '4',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '17',
        serialNumber: 172398472983472,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'PanaSonic 27" WQHD IPS G-Sync 165Hz',
        type: 'free',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1700,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 42500,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '4',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '18',
        serialNumber: 182398472983472,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Asus Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1800,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 45000,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '4',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '19',
        serialNumber: 192398472983472,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'LG UltraGear 27GN950-B 27" 4K UHD Nano IPS G-Sync 144Hz',
        type: 'free',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 1900,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 47500,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '4',
        groupId: '1',
        groupTitle: 'Апофеоз Авангарда Высокотехнологических Электронных Решений и Компьютерной Конфигурации',
        orderTitle: `Инновационный момент в торговле компьютерами: Внедрение высокотехнологичных мониторов
        с расширенными функциями и возможностями, реализуемое через глобальное сотрудничество
         с ведущими производителями, демонстрирует стремление к обеспечению потребителей
          передовыми решениями для улучшения визуального опыта и повышения производительности.`
      },
      {
        id: '20',
        serialNumber: 202398472983472,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Sony PlayStation 5',
        type: 'repair',
        specification: 'XB271HU',
        guarantee: {
          start: '2021-10-01',
          end: '2023-10-01'
        },
        price: [
          {
            value: 2000,
            symbol: 'USD',
            isDefault: 1
          },
          {
            value: 50000,
            symbol: 'UAH',
            isDefault: 0
          }
        ],
        date: '2021-10-01',
        orderId: '4',
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
