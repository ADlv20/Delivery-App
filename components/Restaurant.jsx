import { Text, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api/Api";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const Restaurant = (props) => {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(`${api.domain + props.link}`);
                setRestaurantData(request.data.data);
            } catch (error) {}
        }
        fetchData();
    }, []);

    return (
        <View className="my-1 ml-2">
            <View className="flex-row items-center mr-4">
                <View className="flex-1">
                    <Text className="font-bold text-xl ">{props.title}</Text>
                    <Text className="text-gray-400 font-bold text-xs">
                        {props.subtitle}
                    </Text>
                </View>
                <ArrowRightIcon />
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingTop: 5,
                }}
                horizontal
                showsHorizontalScrollIndicator="false"
            >
                {restaurantData.map((rests) => (
                    <View key={rests.id}>
                        <RestaurantCard
                            img={
                                api.domain +
                                rests.attributes.banner_image.data.attributes
                                    .formats.thumbnail.url
                            }
                            title={rests.attributes.name}
                            location={rests.attributes.location.location}
                            id={rests.id}
                            rating={rests.attributes.rating}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Restaurant;
