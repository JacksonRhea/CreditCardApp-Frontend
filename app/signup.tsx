import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import GlobalStyles from "../global/styles"

const SignUpPage = () => {
  const router = useRouter();

  const handleBack = () => {
    console.log("Go back")
    router.replace('/login')
  }

  const handleSignUp = () => {
    console.log("Signing Up!")
  }

  return (
    <SafeAreaView>
      <View>
        <View style={SignUpStyles.arrowText}>
          <Pressable onPress={handleBack}>
            <AntDesign name="arrowleft" size={32} color="black" />    
          </Pressable>      
          <Text style={SignUpStyles.header}>Sign up new account</Text>
        </View>
        
        <View style={[GlobalStyles.inputContainers, {marginTop: '20%'}]}>
          <TextInput style={GlobalStyles.textInputs} placeholder="First Name"></TextInput>
          <TextInput style={GlobalStyles.textInputs} placeholder="Last Name"></TextInput>
          <TextInput style={GlobalStyles.textInputs} placeholder="Email"></TextInput>
          <TextInput style={GlobalStyles.textInputs} placeholder="Password"></TextInput>

          <Pressable style={GlobalStyles.loginButton} onPress={handleSignUp}>
            <Text style={GlobalStyles.buttonText}>Sign Up</Text>
          </Pressable>

          <Pressable onPress={handleBack}>
          <Text style={SignUpStyles.createAccount}>Already have an account? Sign in</Text>
        </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

const SignUpStyles = StyleSheet.create({
  arrowText: {
    flexDirection: 'row',
    marginTop: '8%',
    marginLeft: '4%'
  },
  header: {
    fontSize: 26,
    marginLeft: '5%'
  },
  createAccount: {
    textDecorationLine: 'underline',
    color: '#0070E0',
    alignSelf: 'center',
    marginTop: '15%'
  }
})

export default SignUpPage;