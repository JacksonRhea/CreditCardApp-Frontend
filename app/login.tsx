import { Redirect, useRouter } from "expo-router";
import React from "react";
import { Text, View, SafeAreaView, TextInput, Button, Image, StyleSheet, Pressable } from "react-native";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    console.log("Logging in...")
    router.replace('/homepage');
  }

  return (
    <SafeAreaView>
      <View style={LoginStyles.loginContainer}>
        <Image source={require('../assets/logo.jpg')} style={LoginStyles.logoSettings} />
        
        <TextInput style={LoginStyles.textInputs} placeholder="Email"></TextInput>
        <TextInput style={LoginStyles.textInputs} placeholder="Password"></TextInput>

        <Pressable style={LoginStyles.loginButton} onPress={handleLogin}>
          <Text style={LoginStyles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const LoginStyles = StyleSheet.create({
  textInputs: {
    backgroundColor: '#D8DAD9',
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    margin: 15,
    height: 40,
    borderRadius: 20,
    paddingLeft: 10
  },
  loginContainer: {
    width: '80%',
    alignSelf: 'center'
  },
  loginButton: {
    width: '50%',
    backgroundColor: '#D8DAD9',
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
    borderRadius: 30,
    borderWidth: 1
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 24,
  },
  logoSettings: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: '12%',
    marginBottom: '20%'
  }
})

export default LoginPage