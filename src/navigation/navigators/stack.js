import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Characters, Home, Show } from "../../screens/index";

const MainNavigation = createNativeStackNavigator();
const Stack = () => {
    return (
        <MainNavigation.Navigator>
            <MainNavigation.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <MainNavigation.Screen name="Characters" component={Characters} options={{
                title: 'Personajes',
                headerStyle: {
                    backgroundColor: '#000',
                    textTransform: 'uppercase'
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }} />
            <MainNavigation.Screen name="Show" component={Show} options={{
                title: 'Detalle',
                headerStyle: {
                    backgroundColor: '#000',
                    textTransform: 'uppercase'
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }} />
        </MainNavigation.Navigator>
    );
}

export default Stack;