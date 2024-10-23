// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from '../utilities/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts from './Contacts';

const Stack = createStackNavigator();



// Screen for input
const Add = ({ navigation }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleSave = async () => {
    try {
      const data = {
        input1: input1,
        input2: input2,
      };
      await AsyncStorage.setItem('userInputs', JSON.stringify(data));
      navigation.navigate('Output');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
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
    padding: 26,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 30,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  inputText: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius:10,
    borderColor:COLORS.grey,
    height:60,

  }

});




export default Add;