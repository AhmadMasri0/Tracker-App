import { FlatList, Text } from "react-native";
import { ExpenseItem } from "./ExpenseItem";

const renderedExpItem = (itemData) => {
    const item = itemData.item;
    // console.log(item)
    return <ExpenseItem {...item} />
}

export const ExpensesList = ({ expenses }) => {

    return <FlatList data={expenses} renderItem={renderedExpItem} keyExtractor={(item) => item.id} />
}