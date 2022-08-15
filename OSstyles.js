import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
	WebArea: {
		paddingTop: Platform.OS === "web" ? 10 : 0,
		backgroundColor: "black",
	},

	IOSArea: {
		backgroundColor: "green",
	},

	AndroidArea: {
		backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
