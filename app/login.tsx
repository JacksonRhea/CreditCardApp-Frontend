import { useRouter } from "expo-router";
import React from "react";
import { Text, View, SafeAreaView, TextInput, Button, Image, StyleSheet, Pressable } from "react-native";
import GlobalStyles from "../global/styles"

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    console.log("Logging in...")
    router.replace('/homepage');
  }

  const handleCreateAccount =() => {
    console.log("Create Account")
    router.replace('/signup')
  }

  return (
    <SafeAreaView>
      <View style={GlobalStyles.inputContainers}>
        <Image source={require('../assets/logo.jpg')} style={LoginStyles.logoSettings} />
        
        <TextInput style={GlobalStyles.textInputs} placeholder="Email"></TextInput>
        <TextInput style={GlobalStyles.textInputs} placeholder="Password"></TextInput>

        <Pressable style={GlobalStyles.loginButton} onPress={handleLogin}>
          <Text style={GlobalStyles.buttonText}>Login</Text>
        </Pressable>

        <Pressable onPress={handleCreateAccount}>
          <Text style={LoginStyles.createAccount}>No account? Sign up!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const LoginStyles = StyleSheet.create({
  logoSettings: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: '12%',
    marginBottom: '20%'
  },
  createAccount: {
    textDecorationLine: 'underline',
    color: '#0070E0',
    alignSelf: 'center',
    marginTop: '15%'
  }
})

export default LoginPage