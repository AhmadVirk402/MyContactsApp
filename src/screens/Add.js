// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '../utilities/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts from './Contacts';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
const Stack = createStackNavigator();



// Screen for input
const Add = (props) => {
  const { navigation,route }=props

  const handleAddContact=route?.params?.addContact||null

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');


  const handleSave = async () => {
    try {
      const name=input1
      const number=input2
      handleAddContact&&handleAddContact(name,number)
      navigation.goBack()
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSave = async () => {
  //   try {
  //     const data = {
  //       input1: input1,
  //       input2: input2,
  //     };
  //     await AsyncStorage.setItem('userInputs', JSON.stringify(data));
  //     navigation.navigate('Output');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={{height:responsiveHeight(4)}}/>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Ionicons name="arrow-back" size={30} color={COLORS.secondary} onPress={() => navigation.goBack(Contacts)} />
        <View style={{ flexDirection: 'row', }}>
          <Ionicons name="brush-outline" size={30} color={COLORS.secondary} />
          <Ionicons name="heart" size={30} color={COLORS.secondary} style={{ marginHorizontal: 14, }} />
          <Ionicons name="filter-outline" size={30} color={COLORS.secondary} />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.headerTitle}>Name:</Text>
        <TextInput
          style={styles.inputText}
          value={input1}
          onChangeText={setInput1}
          placeholder="Enter Name"
        />
        <Text style={styles.headerTitle}>Phone:</Text>
        <TextInput
          style={styles.inputText}
          value={input2}
          onChangeText={setInput2}
          placeholder="Enter Phone no"
        />
        
        
      </View>

      <Button title="Save and Navigate" onPress={handleSave} color={COLORS.secondary} />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveHeight(3),
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: responsiveFont(30),
    color: COLORS.primary,
    
    fontFamily:'Roboto-Bold',
  },
  inputText: {
    borderWidth: 1,
    marginBottom: responsiveHeight(4),
    padding: responsiveHeight(1),
    borderRadius:responsiveHeight(1.5),
    borderColor:COLORS.grey,
    fontFamily:'Roboto-Italic',
    height:responsiveHeight(8),

  }

});




export default Add;