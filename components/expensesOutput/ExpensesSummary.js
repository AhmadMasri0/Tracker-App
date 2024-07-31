import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

export const ExpensesSummary = ({ expenses, expensesPeriod }) => {

    const sumOfExpenses = expenses.reduce((sum, currExp) => sum + currExp.amount, 0);
    console.log(sumOfExpenses)

    return <View style={styles.container}>
        <Text style={styles.period}>{expensesPeriod}</Text>
        <Text style={styles.sum}>${sumOfExpenses.toFixed(2)}</Text>
    </View>;
}

const styles = StyleSheet.create({

    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary600,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary400
    },
});