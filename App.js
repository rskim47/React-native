import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView, TouchableNativeFeedback, TouchableHighlight, Button, Alert, Dimensions, TextInput, Switch } from "react-native";
import Screen from './app/components/Screen'
import AppText from "./app/components/AppText";
import AppPicker from './app/components/AppPicker'
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {


  return <LoginScreen />

  // validate the properties
  const styles = StyleSheet.create({
    container: {
      flex: 1, // Fills the whole scrren
      backgroundColor: "white", // Colors
      justifyContent: "center",
      alignItems: "center",
      justifyContent: "center"
    },
  });
}