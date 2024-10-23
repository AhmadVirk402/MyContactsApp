import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../utilities/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';




const Output = () => {
    const [storedData, setStoredData] = useState(null);
  
    const getStoredData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userInputs');
        if (jsonValue != null) {
          setStoredData(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getStoredData();
    }, []);


    const contactsData = [
        {id: '1', name: 'Abdul Hameed', img: null},
        {id: '2', name: 'Dr. Muhammad Noor Ul Hassan', img: null},
        {id: '3', name: 'Riaz', img: null},
        {id: '4', name: 'Bilal Mustafa', img: require('../image/virk.jpg')}, // Example image URL
        {id: '5', name: 'Bhai Muhammad', img: null},
        {id: '6', name: 'Maqsood Ali', img: null},
        {id: '7', name: 'Mehran Shah', img: null},
        {id: '8', name: 'Zubair Roommate', img: null},
      ];


    const ContactItem = ({contactData}) => {
        const navigation = useNavigation();
        return (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => navigation.navigate("Details", {contact: contactData})}>
            {contactsData.img ? (
              <Image source={contactData.img} style={styles.contactImage} />
            ) : (
              <Ionicons name="person-circle-outline" size={45} color={COLORS.secondary} />
            )}
            
            <Text style={styles.contactName}>{storedData.input1}</Text>
          </TouchableOpacity>
        );
      };
  
    return (
      <View>
        {storedData ? (
          <>
            <ContactItem/>
          </>
        ) : (
          <Text>No data available</Text>
        )}
      </View>
    );
  };

  const styles= StyleSheet.create({
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
      },
      contactName: {
        marginLeft: 16,
        fontSize: 20,
        color:COLORS.primary,
      },
      contactImage: {
        width: 40,
        height: 40,
        borderRadius: 10,
      },
  })
  

export default Output