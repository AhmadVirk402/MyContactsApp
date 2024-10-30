import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../utilities/colors';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import Fonts from '../utilities/fonts';

const Add = (props) => {
  const { navigation, route } = props;
  const handleAddContact = route?.params?.addContact || null;

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [error, setError] = useState({ name: false, number: false });

  const handleSave = () => {
    
    if (!contactName.trim() || !contactNumber.trim()) {
      setError({
        name: !contactName.trim(),
        number: !contactNumber.trim(),
      });
      Alert.alert('Error', 'Please enter both name and phone number.');
      return;
    }

    handleAddContact && handleAddContact(contactName, contactNumber);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ height: responsiveHeight(4) }} />
      <View style={styles.headerIcons}>
        <Ionicons
          name="arrow-back"
          size={30}
          color={COLORS.secondary}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.iconGroup}>
          <Ionicons name="brush-outline" size={30} color={COLORS.secondary} />
          <Ionicons name="heart" size={30} color={COLORS.secondary} style={styles.iconMargin} />
          <Ionicons name="filter-outline" size={30} color={COLORS.secondary} />
        </View>
      </View>

      <Text style={styles.headerTitle}>Name:</Text>
      <TextInput
        style={[styles.inputText, error.name && styles.errorInput]}
        value={contactName}
        onChangeText={(text) => {
          setContactName(text);
          setError((prev) => ({ ...prev, name: false }));
        }}
        placeholder="Enter Name"
      />

      <Text style={styles.headerTitle}>Phone:</Text>
      <TextInput
        style={[styles.inputText, error.number && styles.errorInput]}
        value={contactNumber}
        onChangeText={(text) => {
          setContactNumber(text);
          setError((prev) => ({ ...prev, number: false }));
        }}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
      />

      <Button title="Save Contact" onPress={handleSave} color={COLORS.secondary} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: responsiveHeight(3),
    backgroundColor: COLORS.white,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconGroup: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginHorizontal: 14,
  },
  headerTitle: {
    fontSize: responsiveFont(30),
    color: COLORS.primary,
    fontFamily: Fonts.RobotoBold,
  },
  inputText: {
    borderWidth: 1,
    marginBottom: responsiveHeight(4),
    padding: responsiveHeight(1),
    borderRadius: responsiveHeight(1.5),
    borderColor: COLORS.grey,
    fontFamily: Fonts.RobotoItalic,
    height: responsiveHeight(8),
  },
  errorInput: {
    borderColor: COLORS.red, 
  },
});

export default Add;
