import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

const HomePage = () => {
  const [cardCount, setCardCount] = useState(0);

  const handleAddCard = () => {
    console.log("Adding Card")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {cardCount == 0 ? 
        <View style={HomePageStyles.noCardView}>
          <Text style={HomePageStyles.noCardText}>Add cards to see your rewards!</Text>
          <Pressable onPress={handleAddCard}>
            <Entypo name="circle-with-plus" size={60} color="black" />
          </Pressable>
        </View>
      :
      <View>
        <Text>Here is a look at your rewards</Text>
        
      </View>}
    </SafeAreaView>
  );
};

const HomePageStyles = StyleSheet.create({
  noCardView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  noCardText: {
    fontSize: 28,
    marginBottom: '10%',
    textAlign: 'center'
  }
});

export default HomePage;
