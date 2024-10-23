import React from 'react';
import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../utilities/colors';
export default function Details({ route }) {
  // Check if route.params is undefined or contact is missing
  const contact = route?.params?.contact || {
    name: 'Bilal Mustafa',
    img: require('../image/virk.jpg'),  // Default image if none provided
    role: 'UI Designer',
    organization: 'A2 Creative Designers',
  };

  console.log('contact: ',contact)

  const dialNumber = (number) => {
    Linking.openURL(`tel:${number}`);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Ionicons name="arrow-back" size={30} color={COLORS.secondary} onPress={() => navigation.goBack(contact)} />
        <View style={{ flexDirection: 'row', }}>
          <Ionicons name="brush-outline" size={30} color={COLORS.secondary} />
          <Ionicons name="heart" size={30} color={COLORS.secondary} style={{marginHorizontal: 14,}} />
          <Ionicons name="filter-outline" size={30} color={COLORS.secondary} />
        </View>
      </View>
      <View style={styles.profileContainer}>
      {contact.img ? (
          <Image source={contact.img} style={styles.profileImage} />
        ) : (
          <Ionicons name="person-circle-outline" size={200} color={COLORS.secondary} />
        )}
        {/* <Image source={contact.img} style={styles.profileImage} /> */}
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.role}>{contact.role} at </Text>
        <Text style={styles.role}>{contact.organization}</Text>
      </View>

      <View style={styles.contactInfo}>
        <TouchableOpacity onPress={() => dialNumber('923001560571')}>
          <View style={styles.phoneRow}>
            <Text style={styles.phoneText}>92 300 1560 571</Text>
            <View style={{flexDirection:'row',}}>
            <Ionicons name="share" size={25} color={COLORS.primary} style={{marginRight:10}} />
            <Ionicons name="call" size={25} color={COLORS.primary}/>
            </View>
          </View>
          <Text style={styles.phoneLabel}>Personal</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dialNumber('923336560571')}>
          <View style={styles.phoneRow}>
            <Text style={styles.phoneText}>92 333 6560 571</Text>
            <View style={{flexDirection:'row',}}>
            <Ionicons name="share" size={25} color={COLORS.primary} style={{marginRight:10}} />
            <Ionicons name="call" size={25} color={COLORS.primary} />
            </View>
          </View>
          <Text style={styles.phoneLabel}>Work</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{    backgroundColor:COLORS.light,padding:10,borderRadius:10,marginTop:20}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={styles.organizationInfo}>
        <Text style={styles.label}>Organization</Text>
        <Text style={styles.text}>{contact.organization}</Text>
      </View>
      <Ionicons name="pin" size={25} color={COLORS.primary} />
      </View>

      <View style={styles.workDescription}>
        <Text style={styles.label}>Work Description</Text>
        <Text style={styles.text}>{contact.role}</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    paddingTop:40,
    backgroundColor: COLORS.white,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 40
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 10
  },
  role: {
    fontSize: 20,
    color: COLORS.primary
  },
  contactInfo: {
    backgroundColor:COLORS.light,
    padding:10,
    borderRadius:10,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  phoneText: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight:'bold'
  },
  phoneLabel: {
    fontSize: 17,
    color: COLORS.primary
  },
  organizationInfo: {
    marginTop: 0,

  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color:COLORS.primary
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    color:COLORS.primary
  },
  workDescription: {
    marginTop: 20
  },
});
