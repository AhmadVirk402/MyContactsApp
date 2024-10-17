import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Details from '../Details';

export default ContactsList = ({data}) => {
    // Contact List Item Component
    const ContactItem = ({contact}) => {
      const navigation = useNavigation();
      return (
        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => navigation.navigate(Details, {contact: contact})}>
          {contact.img ? (
            <Image source={contact.img} style={styles.contactImage} />
          ) : (
            <Ionicons name="person-circle-outline" size={45} color="#7e5ff2" />
          )}
          <Text style={styles.contactName}>{contact.name}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ContactItem contact={item} />}
        contentContainerStyle={styles.contactList}
      />
    );
  };

 