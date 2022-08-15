import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const CategoryCard = (props) => {
	return (
		<TouchableOpacity className="relative mr-2">
			<Image
				source={{
					uri: props.imgUrl,
				}}
				className="h-20 w-32"
			/>
			<Text className="absolute text-center font-bold text-white bottom-1 left-1">
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};

export default CategoryCard;
