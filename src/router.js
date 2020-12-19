import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

//pages
import Home from './pages/Home';
import Detail from './pages/Detail';


const Stack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: 'alugAki',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_500Medium'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather name='shopping-bag'
                                    size={24}
                                    color="black">

                                </Feather>
                            </TouchableOpacity>
                        )
                    }} />

                <Stack.Screen name='detail'
                    component={Detail}
                    options={{
                        title: 'Detalhe',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_500Medium'
                        },
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather name='shopping-bag'
                                    size={24}
                                    color="black">

                                </Feather>
                            </TouchableOpacity>

                        )
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

