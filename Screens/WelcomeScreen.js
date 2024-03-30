import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../Components/COLORS'

export default function WelcomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center', backgroundColor:COLORS.light}}>
      <Image source={require("../assets/ShoppingBag.png")}/>
      <Text style={{color:COLORS.dark, fontWeight:'bold', fontSize:29, marginTop:10}}>BazarAF</Text>
      <Text style={{color:COLORS.black, fontWeight:'bold', fontSize:18, paddingTop:5, marginBottom:150}}>Welcome to the world of BazarAF</Text>
      <Text style={{color:COLORS.orange, fontWeight:'bold', fontSize:18, paddingTop:5}}>Get What You Want</Text>
      
      <Text style={{color:COLORS.orange, fontWeight:'bold', fontSize:23, marginTop:5, marginBottom:80}}>Shop And Sell</Text>
    <TouchableOpacity 
      onPress={()=>navigation.navigate("HomeScreen")}
       style={{backgroundColor:COLORS.orange, width:"80%", padding:15, alignItems:'center', borderRadius:18, marginTop:65}}>
        <Text style={{textAlign:'center', color:COLORS.light, fontWeight:'bold', fontSize:18}}>Let's Shop</Text>
    </TouchableOpacity>
    </View>
  )
}