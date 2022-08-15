import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const Home = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Main Page",
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row mx-2 pb-3 items-center space-x-2">
                <Image
                    className="w-14 h-14 p-4 rounded-full bg-gray-300"
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                />
                <View className="flex-1">
                    <Text className="text-gray-400 text-xs font-bold ">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl ">
                        Current Location
                        <ChevronDownIcon />
                    </Text>
                </View>
                <UserIcon size={35} className="mx-10" />
            </View>
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 bg-gray-200 p-3 rounded-lg">
                    <SearchIcon color="gray" />
                    <TextInput
                        placeholder="Search for Restaurants"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsIcon />
            </View>

            <ScrollView>
				<Categories />
				
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
