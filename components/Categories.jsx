import { ScrollView, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { api } from "../api/Api";
const Categories = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(
                api.domain + api.fetchAllFoodCategories
            );
            setBannerData(request.data.data);
        }

        fetchData();
    }, []);

    return (
        <View>
            <Text className="font-bold text-xl ml-2 my-1">Categories</Text>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 15,
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
