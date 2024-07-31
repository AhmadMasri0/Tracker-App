import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ManageExpense } from './screens/ManageExpense';
import { RecentExpenses } from './screens/RecentExpenses';
import { AllExpenses } from './screens/AllExpenses';
import { GlobalStyles } from './constants/Styles';
import { Ionicons } from '@expo/vector-icons'
import { IconButton } from './components/UI/IconButton';
import { ExpensesContextProvider } from './store/ExpensesContext';

const BottomTaps = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TapsNavigation = () => {
  return <BottomTaps.Navigator screenOptions={({ navigation }) => ({
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({ tintColor, size }) => <IconButton color={tintColor} size={24} icon={'add'} onPress={() => { navigation.navigate('Manage Expense') }} />
  })}>
    <BottomTaps.Screen name='Recent Expenses' component={RecentExpenses}
      options={{
        tabBarIcon: ({ size, color }) => <Ionicons name='hourglass' color={color} size={size} />,
        tabBarLabel: 'Recent'
      }} />
    <BottomTaps.Screen name='All Expenses' component={AllExpenses}
      options={{
        tabBarIcon: ({ size, color }) => <Ionicons name='calendar' color={color} size={size} />,
        tabBarLabel: 'All'
      }} />
  </BottomTaps.Navigator>
}
export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
          }}>
            <Stack.Screen name='Expenses Overview' component={TapsNavigation} options={{
              headerShown: false
            }} />
            <Stack.Screen name='Manage Expense' options={{
              presentation: 'modal'
            }} component={ManageExpense} />
          </Stack.Navigator>

        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

