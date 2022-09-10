import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import { DetailedRestaurant, Home } from "./screens";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <TailwindProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen
                            name="DetailedRestaurant"
                            component={DetailedRestaurant}
                        />
                    </Stack.Navigator>
                </TailwindProvider>
            </Provider>
        </NavigationContainer>
    );
}
