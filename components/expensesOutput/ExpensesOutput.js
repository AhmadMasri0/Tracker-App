import { StyleSheet, Text, View } from "react-native";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import { GlobalStyles } from "../../constants/Styles";



export const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }) => {

    let content = <Text style={styles.fallBackText}>{fallBackText}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />

    }
    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
        {content}
    </View>;
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24, paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    },
    fallBackText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 30
    }
});