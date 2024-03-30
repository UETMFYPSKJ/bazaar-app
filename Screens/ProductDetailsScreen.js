import { View, Text, Image, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../Components/COLORS'
import { FontAwesome } from '@expo/vector-icons'
import Quantity from '../Components/Quantity';


export default function ProductDetailsScreen({navigation, route}) {
  const{item}=route.params;
  
  return (
    
    < View style={{backgroundColor:item.color, flex:1}}>
     
     <SafeAreaView style={{flexDirection:'row', marginHorizontal:16}}> 

<Pressable style={{flex:1}}
           onPress={()=>navigation.goBack()}>
           <FontAwesome name="arrow-circle-left" size={24} color="white"/>
</Pressable>

     <FontAwesome name="heart-o" size={24} color="white" />
     </SafeAreaView>
      
      <View style={{
        backgroundColor:COLORS.white, 
        marginTop:200, 
        flex:1, 
        borderTopLeftRadius:56,
        borderTopEndRadius:56,
        alignItems:'center',
        paddingHorizontal:16}}>

        <View style={{flex:1, width:300, height:300, position:'absolute', top:-150}}>
      <Image 
      source={item.image}
      style={{width:"100%", height:"100%", resizeMode:'contain'}}/>
        </View>
       
        {/*Product name*/}
      
       <Text style={{ marginTop:145, fontSize:28, fontWeight:'bold'}}>{item.name}</Text>
       
       {/*Product Price*/}<View style={{flexDirection:'row'}}>
       <Text style={{fontWeight:'bold'}}>Price: </Text>
       <Text style={{marginLeft:0}}>{item.Price}</Text></View>
        <Quantity/>
       
        {/*Product Description*/}
        <Text style={{marginTop:12, fontSize:17,}}>{item.description}</Text>
       
       {/*Add to cart button*/}
       <TouchableOpacity
      //onPress={()=>navigation.navigate("")}
       style={{backgroundColor:COLORS.black, width:"80%", padding:15, alignItems:'center', borderRadius:18, marginTop:65}}>
          <Text style={{textAlign:'center', color:COLORS.light, fontWeight:'bold', fontSize:18}}>Add To Cart</Text>
             </TouchableOpacity>
             
       
    
      </View>

      
       
          </View> 
  )
}