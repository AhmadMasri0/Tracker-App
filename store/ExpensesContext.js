import { createContext, useReducer } from "react";

const EXPENSES = [
    {
        id: 'e1',
        description: 'A description for e1',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e2',
        description: 'A description for e2',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e3',
        description: 'A description for e3',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e4',
        description: 'A description for e3',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e5',
        description: 'A description for e3',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e6',
        description: 'A description for e3',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e7',
        description: 'A description for e3',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e8',
        description: 'A description for e3',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e9',
        description: 'A description for e3',
        date: new Date(),
        amount: 35.49
    }, {
        id: 'e10',
        description: 'A description for e3',
        date: new Date(),
        amount: 35.49
    }
]

export const ExpensesContext = createContext({

    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [...state, { ...action.payload, id }]
        case 'UPDATE':
            const expenseIndex = state.findIndex(exp => exp.id === action.payload.id);
            const updatedExp = state[expenseIndex];
            const updatedItem = { ...updatedExp, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[expenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter(exp => exp.id !== action.payload);

        default: return state;
    }
}

export const ExpensesContextProvider = ({ children }) => {

    const [expenses, dispatch] = useReducer(expensesReducer, EXPENSES);


    const addExpense = (data) => {

        dispatch({
            type: 'ADD',
            payload: data
        })
    };

    const deleteExpense = (id) => {

        dispatch({
            type: 'DELETE',
            payload: id
        })
    };
    const updateExpense = (id, data) => {

        dispatch({
            type: 'UPDATE',
            payload: { id, data }
        })
    };

    return <ExpensesContext.Provider value={{ expenses, addExpense, deleteExpense, updateExpense }}>
        {children}
    </ExpensesContext.Provider>
}