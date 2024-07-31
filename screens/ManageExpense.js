import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/Styles";
import { Button } from "../components/UI/Button";
import { ExpensesContext } from "../store/ExpensesContext";



export const ManageExpense = ({ route, navigation }) => {

    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;

    const expenesesCtx = useContext(ExpensesContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add expense'
        });

    }, [isEditing, navigation]);

    const deleteExpense = () => {
        expenesesCtx.deleteExpense(expenseId);
        navigation.goBack();
    }

    const cancelHandler = () => {
        navigation.goBack();
    }
    const confirmHandler = () => {

        if (isEditing) {

            expenesesCtx.updateExpense(expenseId, {
                description:
                    'TEST',
                amount: 15.49,
                date: new Date()
            });
        } else {
            expenesesCtx.addExpense({
                description:
                    'TEST!',
                amount: 15.49,
                date: new Date()
            });
        }
        navigation.goBack();
    }


    return <View style={styles.container}>

        <View style={styles.buttonsContainer}>
            <Button style={styles.button} mode='flat' onPress={cancelHandler}>
                Cancel
            </Button>
            <Button style={styles.button} onPress={confirmHandler}>
                {isEditing ? 'Update' : 'Add'}
            </Button>
        </View>
        {isEditing &&
            <View style={styles.deleteContainer}>
                <IconButton color={GlobalStyles.colors.error500} size={36} icon={'trash'} onPress={deleteExpense} />
            </View>}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary700
    },
    deleteContainer: {
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})