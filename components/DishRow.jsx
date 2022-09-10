import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import {
    MinusCircleIcon,
    PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
    addToBasket,
    removeFromBasket,
    selectBasketItems,
    selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, img, name, description, price }) => {
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, img, description, price }));
    };
    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({ id }));
    };

    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`border border-gray-200 ${
                    isPressed && "border-b-0"
                }`}
            >
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

            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2">
                        <TouchableOpacity
                            onPress={addItemToBasket}
                            className=""
                        >
                            <PlusCircleIcon
                                color={"white"}
                                fill={"#00CCBB"}
                                size={40}
                            />
                        </TouchableOpacity>

                        <Text>{items.length}</Text>

                        <TouchableOpacity
                            onPress={removeItemFromBasket}
                            className=""
                        >
                            <MinusCircleIcon
                                fill={"#00CCBB"}
                                color={"white"}
                                size={40}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
};

export default DishRow;
