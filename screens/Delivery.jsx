import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import { api } from "../api/Api";

const Delivery = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const [restaurantData, setRestaurantData] = useState();

    const [latitudeData, setLatitudeData] = useState();
    const [longitudeData, setLongitudeData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(
                    api.domain +
                        `/api/restaurants/${restaurant.id}?populate=location`
                );
                setRestaurantData(result.data.data);
                setLatitudeData(restaurantData.attributes.location.latitude);
                setLongitudeData(restaurantData.attributes.location.longitude);
                console.log(latitudeData, longitudeData);
            } catch (error) {
                console.log("Error in Delivery Page fetch  restaurant data");
            }
            return {
                location: {
                    latitudeD: latitudeData,
                    longitudeD: longitudeData,
                },
            };
        }
        const location = fetchData();
        console.log("Location: " + location);
    }, []);

    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="justify-between px-4 flex-row">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <XIcon color={"white"} size={30} />
                    </TouchableOpacity>
                    <Text className="text-lg font-light text-white">
                        Order Help
                    </Text>
                </View>
                <View className="bg-white mx-5 my-5 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <Text className="text-lg text-gray-400">
                                Estimated Arrival
                            </Text>
                            <Text className="text-4xl font-bold">
                                45 - 50 Minutes
                            </Text>
                        </View>
                        <Image
                            source={{
                                uri: "https://links.papareact.com/fls",
                            }}
                            className="h-20 w-20"
                        />
                    </View>
                    <Progress.Bar
                        indeterminate={true}
                        width={200}
                        color={"#00CCBB"}
                    />
                    <Text className="mt-3 text-gray-500">
                        Your Order at {restaurant.name} is being prepared
                    </Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: 19.182904,
                    longitude: 72.977541,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
                className="flex-1 -mt-10 z-0"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: 19.182904,
                        longitude: 72.977541,
                    }}
                    title={"Apetite"}
                    description={"Momos"}
                    identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>
            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-12 w-12 bg-white rounded-full ml-4"
                />
                <View>
                    <Text className="text-lg">Made By Adwait G</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Delivery;
