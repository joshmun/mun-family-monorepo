import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("./assets/engagement.jpeg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} blurRadius={7}>
        {/* <View style={styles.overlay}> */}
        <Text style={styles.text}>Welcome to the Mun Family app!</Text>
        {/* </View> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    tintColor: "#000000",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: "20",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
});
