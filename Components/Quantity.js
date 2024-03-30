import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import COLORS from './COLORS';


const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View><Text style={{textAlign:'right', marginRight:45, fontSize:15, fontWeight:'bold'}}>Quantity</Text>
    <View style={{ flexDirection: 'row', alignItems:'center', marginLeft:300}}>
      
      <TouchableOpacity
      style={ { backgroundColor:COLORS.black, padding: 10, borderRadius: 5, margin:5, paddingHorizontal:12, marginRight:12}}
      onPress={decrementQuantity}
    >
    <Text style={{fontSize:15, color:COLORS.light}}>-</Text>
    </TouchableOpacity>
      
        
                <Text style={{borderColor:COLORS.black, borderWidth:2, textAlign:'center', marginRight:8}}>{quantity}</Text>

                <TouchableOpacity
      style={ { backgroundColor:COLORS.black, padding: 10, borderRadius: 5, margin: 5,marginRight:30}}
      onPress={incrementQuantity}
    >
    <Text style={{fontSize:15, color:COLORS.light}}>+</Text>
    </TouchableOpacity>
      </View></View>

  );
};

export default Quantity;
