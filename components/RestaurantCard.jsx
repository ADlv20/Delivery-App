import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = (props) => {
    var id = props.id;
    var img = props.img;
    const title = props.title;
    const location = props.location;
    const speciality = props.speciality;
    const rating = props.rating;

    navigation = useNavigation();
    return (
        <View className="bg-white mr-2 rounded-md">
            <TouchableOpacity
                onPress={() => {
                    navigation.push("DetailedRestaurant");
                }}
            >
                <Image
                    source={{
                        uri: img,
                    }}
                    className="h-36 w-64 rounded-md"
                />
                <View className="left-2">
                    <Text className="text-left text-xl font-bold">{title}</Text>
                    <View className="flex-row items-center ">
                        <StarIcon
                            color={"#FFCC0D"}
                            fill={"#FFCC0D"}
                            size={20}
                            opacity={0.5}
                        />
                        <Text className="text-[#FFCC0D]">{rating}</Text>
                        <Text className="ml-3 text-xs text-gray-500">
                            Speciality
                        </Text>
                    </View>
                    <View className="mt-1 mb-2 flex-row items-center">
                        <LocationMarkerIcon color={"gray"} opacity={0.5} />
                        <Text className="text-xs text-gray-500">
                            {location}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default RestaurantCard;
