import { Text, View, ScrollView } from "react-native";
import React from "react";

const RestaurantRow = (props) => {
    return (
        <View className="ml-2 my-1">
            <Text className="font-bold text-xl ">{props.title}</Text>
            <Text className="text-gray-400 font-bold text-xs">
                {props.subtitle}
            </Text>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 15,
                    paddingTop: 5,
                }}
                horizontal
                showsHorizontalScrollIndicator="false"
            ></ScrollView>
        </View>
    );
};

export default RestaurantRow;
