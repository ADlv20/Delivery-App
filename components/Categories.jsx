import { ScrollView, View } from "react-native";
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
            /* console.log(
                request.data.data[0].attributes.image.data.attributes.formats
                    .thumbnail.url
            ); */
            //console.log(request.data.data[0].attributes.banner_image.data.attributes.url);
        }

        fetchData();
    }, []);
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
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
    );
};

export default Categories;
