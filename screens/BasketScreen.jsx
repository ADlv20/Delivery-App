import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
    removeFromBasket,
    selectBasketItems,
    selectBasketTotal,
} from "../features/basketSlice";
import { useState } from "react";
import { XCircleIcon } from "react-native-heroicons/outline";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();
    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    //console.log(groupedItemsInBasket);
    //console.log(restaurant);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
                    <View>
                        <Text className="text-lg font-bold text-center">
                            Basket
                        </Text>
                        <Text className="text-center text-gray-400">
                            {restaurant.name}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                    >
                        <XCircleIcon
                            fill={"#00CCBB"}
                            color={"white"}
                            size={40}
                        />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 bg-white my-5 px-4">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru",
                        }}
                        className="w-14 h-14 p-4 rounded-full bg-gray-300"
                    />
                    <Text className="flex-1"> Deliver in 50-75 min </Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(
                        ([key, items]) => (
                            <View
                                key={key}
                                className="flex-row items-center px-5 py-2 space-x-3 bg-white"
                            >
                                <Text className="text-[#00CCBB]">
                                    {items.length} x
                                </Text>
                                <Image
                                    source={{
                                        uri: items[0]?.img,
                                    }}
                                    className="h-12 w-12 rounded-full"
                                />
                                <Text className="flex-1">{items[0]?.name}</Text>
                                <Text className="text-gray-600">
                                    <Currency
                                        quantity={items[0]?.price}
                                        currency="INR"
                                    />
                                </Text>
                                <TouchableOpacity>
                                    <Text
                                        className="text-[#00CCBB] text-xs"
                                        onPress={() =>
                                            dispatch(
                                                removeFromBasket({ id: key })
                                            )
                                        }
                                    >
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )}
                </ScrollView>
                <View className="py-5 px-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={basketTotal} currency="INR" />
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={40} currency="INR" />
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="font-extrabold">Order Total</Text>
                        <Text className="font-extrabold">
                            <Currency
                                quantity={40 + basketTotal}
                                currency="INR"
                            />
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("PreparingOrderScreen")
                        }
                        className="bg-[#00CCBB] rounded-lg p-4 items-center"
                    >
                        <Text className="text-center font-extrabold text-white text-lg">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;
