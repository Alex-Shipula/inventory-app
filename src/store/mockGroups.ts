import { IGroup } from 'src/types'

export const mockGroups: IGroup[] = [
  {
    id: '1',
    title: 'Monitors',
    description: 'Monitors group',
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
        groupId: '1'
      },
      {
        id: '2',
        serialNumber: 22332434234322,
        isNew: 0,
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
        orderId: '2',
        groupId: '2'
      },
      {
        id: '3',
        serialNumber: 3234234234324,
        isNew: 1,
        photo: 'https://source.unsplash.com/random',
        title: 'Acer Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
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
        orderId: '3',
        groupId: '3'
      },
      {
        id: '4',
        serialNumber: 4234682638472374,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Acer Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
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
        orderId: '4',
        groupId: '4'
      },
      {
        id: '5',
        serialNumber: 523848273648253,
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
        orderId: '5',
        groupId: '5'
      },
      {
        id: '6',
        serialNumber: 623423423923897,
        isNew: 0,
        photo: 'https://source.unsplash.com/random',
        title: 'Acer Predator XB271HU  27" WQHD IPS G-Sync 165Hz',
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
        orderId: '6',
        groupId: '6'
      }
    ]
  }
]