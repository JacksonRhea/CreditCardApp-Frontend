import React from "react";
import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  loginButton: {
    width: '95%',
    backgroundColor: '#D8DAD9',
    alignSelf: 'center',
    marginTop: 40,
    height: 70,
    borderRadius: 16,
    borderWidth: 1
  },
  textInputs: {
    backgroundColor: '#D8DAD9',
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    margin: 15,
    height: 50,
    borderRadius: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: '6%'
  },
  inputContainers: {
    width: '80%',
    alignSelf: 'center'
  }
});

export default GlobalStyles;