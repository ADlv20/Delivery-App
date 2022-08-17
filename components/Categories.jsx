import { ScrollView, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { api } from "../api/Api";

const Categories = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(
                    api.domain + api.fetchAllFoodCategories
                );
                setBannerData(request.data.data);
            } catch (error) {
                console.log("Error check network Categories");
            }
        }
        fetchData();
    }, []);

    return (
        <View>
            <View className="my-1 ml-2">
                <Text className="font-bold text-xl">Categories</Text>
                <Text className="font-bold text-gray-400 text-xs">
                    Explore taste vocabulary
                </Text>
            </View>

            <ScrollView
                contentContainerStyle={{
                    paddingLeft: 7,
                }}
                horizontal
                showsHorizontalScrollIndicator="false"
            >
                {bannerData.map((rests) => (
                    <View key={rests.id}>
                        <CategoryCard
                            imgUrl={
                                api.domain +
                                rests.attributes.image.data.attributes.formats
                                    .thumbnail.url
                            }
                            title={rests.attributes.name}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Categories;
