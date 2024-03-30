import { View, Text, FlatList, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { ProductsList } from './ProductsList';
import COLORS from './COLORS';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProductsCard() {
    const navigation = useNavigation();
    
  return (
    
      <FlatList 
        data={ProductsList} 
        renderItem={({item}) => (

          <Pressable  onPress={()=>navigation.navigate("ProductDetailsScreen", {item:item})}
          key={item.id}

           style={{
            backgroundColor: COLORS.white,
            borderRadius: 16,
            marginVertical: 9,
            alignItems: 'flex-start',
            marginHorizontal: 15,
            paddingHorizontal: 13,
            paddingVertical: 15,

            shadowColor: COLORS.black,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 7,
            elevation: 3
          }}>
        
        <View style={{flexDirection:'row'}}>
            <Image source={item.image} style={{ width: 70, height: 70, resizeMode: 'center' }} />
            <Text style={{marginLeft:15,fontWeight:'bold', fontSize:15}}>{item.name}</Text>
       </View>
             <View style={{flexDirection:'row'}}>
             <Text style={{marginLeft:15}}>{item.Price}</Text>
            <View style={{flexDirection:'row', alignItems:'flex-end', marginLeft:265}}>
             <FontAwesome name="star" size={16} color={COLORS.primary} />
             <FontAwesome name="star" size={16} color={COLORS.primary} />
             <FontAwesome name="star" size={16} color={COLORS.primary} />
             </View>
             </View>
          </Pressable>
        )} 
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
  )
}
