import { useContext } from "react";
import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";

export const AllExpenses = () => {

    const expenesesCtx = useContext(ExpensesContext);

    return <ExpensesOutput expenses={expenesesCtx.expenses} expensesPeriod={'Total'}
        fallBackText={'No registered expenses found '} />;
}