import { Pressable, StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../../constants/Styles"
import { getFormattedDate } from "../../util/date"
import { useNavigation } from "@react-navigation/native"

export const ExpenseItem = ({ id, description, date, amount }) => {


    const navigation = useNavigation();


    const onExpensePressed = () => {
        navigation.navigate('Manage Expense', {
            expenseId: id
        });
    }

    return <Pressable onPress={onExpensePressed} style={({ pressed }) => pressed && styles.pressed}>
        <View style={styles.expenseItem}>
            <View>
                <Text style={[styles.textBase, styles.description]}>
                    {description}
                </Text>
                <Text style={[styles.textBase]}>
                    {getFormattedDate(date)}
                </Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>
                    {amount.toFixed(2)}
                </Text>

            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    expenseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        borderRadius: 4,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.4,
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 15,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    amount: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    },
    pressed: {
        opacity: 0.8
    }
})