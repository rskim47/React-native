import React from 'react';
import { View, TextInput, Platform, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import defaultStyles from '../config/styles'
import colors from '../config/colors'

function AppTextInput({ icon, ...otherProps }) {
  return (<View style={styles.container}>
    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
    <TextInput style={styles.text} {...otherProps} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10
  },
  icon: {
    margin: 10
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    alignSelf: "center",
    alignContent: "center"
  }
})

export default AppTextInput;