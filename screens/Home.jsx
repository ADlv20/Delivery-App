import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, Text, View } from "react-native";
import {
	UserIcon,
	ChevronDownIcon,
	SearchIcon,
	AdjustmentsIcon,
} from "react-native-heroicons/outline";

const Home = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: "Main Page",
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView>
			<View className="flex-row mx-2 pb-3 items-center space-x-2">
				<Image
					className="w-14 h-14 p-4 rounded-full bg-gray-300"
					source={{
						uri: "https://links.papareact.com/wru",
					}}
				/>
				<View>
					<Text className="text-gray-400 text-xs font-bold ">
						Deliver Now!
					</Text>
					<Text className="font-bold text-xl ">
						Current Location
						<ChevronDownIcon />
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
