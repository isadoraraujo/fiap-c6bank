import TypeDb from '../../types/TypeDb'

const db: Array<TypeDb> = [
    {
        id: 1,
        type: 'pix',
        amount: 100,
        date: '2022-10-19',
        description: 'Pizza galera',
        operation: 'credit'
    },
    {
        id: 2,
        type: "debit",
        amount: 40,
        date: '2022-10-19',
        description: "Gasolina",
        operation: "debit"
    },
    {
        id: 3,
        type: "ted",
        amount: 100,
        date: '2022-10-18',
        description: "Salário",
        operation: "credit"
    },
    {
        id: 4,
        type: 'pix',
        amount: 500,
        date: '2022-10-07',
        description: 'Energia elétrica',
        operation: 'credit'
    },
    {
        id: 5,
        type: 'debit',
        amount: 150,
        date: '2022-10-07',
        description: 'Presente',
        operation: 'debit'
    },
]

export default db;