import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

import { Home, CitiesList, About } from "./app/screens"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
              case "Inicio":
                iconName = focused ? "home" : "home-outline"
                break
              case "Ciudades":
                iconName = focused ? "map" : "map-outline"
                break
              case "Quiénes Somos":
                iconName = focused ? "help-circle" : "help-circle-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray"
        })}
      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Ciudades" component={CitiesList} />
        <Tab.Screen name="Quiénes Somos" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
