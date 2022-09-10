import { View, Text, SafeAreaView, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const DetailedRestaurant = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Detailed Restaurant",
            headerShown: true,
        });
    }, []);

    return (
        <SafeAreaView className="ml-5">
            <View>
                <Text className="text-3xl font-extrabold">
                    DetailedRestaurant
                </Text>
            </View>
            <Button
                title="New Details"
                onPress={() => navigation.push("DetailedRestaurant")}
            />
        </SafeAreaView>
    );
};

export default DetailedRestaurant;
