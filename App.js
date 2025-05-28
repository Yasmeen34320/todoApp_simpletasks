import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import Task1 from './components/task1';
import Task2 from './components/task2';
import Task3 from './components/task3';
import TodoList from './components/TodoList';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Task1') iconName = 'list';
              else if (route.name === 'Task2') iconName = 'checkmark-circle';
              else if (route.name === 'Task3') iconName = 'calendar';
              else if (route.name === 'Todo') iconName = 'clipboard';

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Task1" component={Task1} />
          <Tab.Screen name="Task2" component={Task2} />
          <Tab.Screen name="Task3" component={Task3} />
          <Tab.Screen name="Todo" component={TodoList} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
 flex: 1,
    marginTop: 50,
    padding: 20,
    }});
