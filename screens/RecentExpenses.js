import { useContext } from "react";
import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";
import { getDateMinusDays } from "../util/date";

export const RecentExpenses = () => {

    const expenesesCtx = useContext(ExpensesContext);

    const recentExpenses = expenesesCtx.expenses.filter(exp => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        console.log(date7DaysAgo, exp.date);
        return exp.date > date7DaysAgo

    });

    return <ExpensesOutput expenses={recentExpenses} expensesPeriod={'Last 7 days'}
        fallBackText={'No registered expenses found for the last 7 days'} />;

}