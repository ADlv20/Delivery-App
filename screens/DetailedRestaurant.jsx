import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    LocationMarkerIcon,
    QuestionMarkCircleIcon,
    StarIcon,
} from "react-native-heroicons/outline";
import axios from "axios";
import { api } from "../api/Api";
import DishRow from "../components/DishRow";

const DetailedRestaurant = () => {
    const navigation = useNavigation();
    const {
        params: { id, img, name, location, rating, description },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Detailed Restaurant",
            headerShown: false,
        });
    }, []);

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(
                    `${api.domain}/api/restaurants/${id}?populate=menu.dishimage`
                );
                setDishes(request.data.data.attributes.menu);
                console.log(
                    "=============================================================="
                );
                //console.log(dishes[0]);
            } catch (error) {
                console.log("Error in Detailed Restaurant");
            }
        }
        fetchData();
    }, []);

    return (
        <ScrollView>
            <View>
                <Image
                    source={{
                        uri: img,
                    }}
                    className="h-56 w-full rounded-md"
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                >
                    <ArrowLeftIcon size={20} />
                </TouchableOpacity>

                <View className="bg-white">
                    <View className="pl-4 pt-4">
                        <Text className="text-3xl font-bold">{name}</Text>
                        <View className="flex-row items-center space-x-2 my-2">
                            <StarIcon
                                fill={"#FFCC0D"}
                                color={"#FFCC0D"}
                                opacity={0.5}
                            />
                            <Text className="font-bold text-[#FFCC0D]">
                                {rating}
                            </Text>
                            <LocationMarkerIcon color="gray" opacity={0.3} />
                            <Text className="text-xs text-gray-500">
                                Nearby {location}
                            </Text>
                        </View>
                        <View>
                            <Text className="text-gray-500 mt-2 pb-4">
                                {description}
                            </Text>
                        </View>
                        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                            <QuestionMarkCircleIcon
                                color="gray"
                                opacity={0.6}
                                size={20}
                            />
                            <Text className="pl-2 flex-1 text-md font-bold">
                                Have a food allergy?
                            </Text>
                            <ChevronRightIcon color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text className="px-4 pt-6 mb-3 font-bold text-2xl">
                        Menu
                    </Text>

                    {dishes.map((dish) => (
                        <DishRow
                            key={dish.id}
                            img={
                                api.domain +
                                dish.dishimage.data[0].attributes.url
                            }
                            name={dish.menuitem}
                            description={dish.menudescription}
                            id={dish.id}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailedRestaurant;
