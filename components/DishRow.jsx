import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";

const DishRow = ({ img, name, description }) => {
    return (
        <TouchableOpacity className="border border-gray-200">
            <View className="bg-white flex-row">
                <View className="flex-1 ml-2">
                    <Text className="text-lg font-semibold text-gray-600">
                        {name}
                    </Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-3">
                        <Currency quantity={5} currency={"INR"} />
                    </Text>
                </View>
                <View>
                    <Image
                        style={{
                            borderWidth: 1,
                            borderColor: "#F3F3F4",
                        }}
                        source={{
                            uri: img,
                        }}
                        className="h-28 w-28 rounded-full"
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DishRow;
