import { Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/outline";

const RestaurantCard = (props) => {
    return (
        <View className="bg-white h-44 mr-2 shadow-sm">
            <TouchableOpacity className="">
                <Image
                    source={{
                        uri: props.img,
                    }}
                    className="h-24 w-60 rounded-md"
                />
                <View className="left-2">
                    <Text className="text-left text-xl font-bold">
                        {props.title}
                    </Text>
                    <View className="flex-row items-center ">
                        <StarIcon
                            color={"#FFCC0D"}
                            fill={"#FFCC0D"}
                            size={20}
                            opacity={0.5}
                        />
                        <Text className="text-[#FFCC0D]">4.8</Text>
                        <Text className="ml-3 text-xs text-gray-500">
                            Speciality
                        </Text>
                    </View>
                    <View className="mt-1 flex-row items-center">
                        <LocationMarkerIcon color={"gray"} />
                        <Text className="text-xs text-gray-500"> Mumbai</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default RestaurantCard;
