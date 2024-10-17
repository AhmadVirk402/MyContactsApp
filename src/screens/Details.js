import React from 'react';
import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export default function Details({ route }) {
  // Check if route.params is undefined or contact is missing
  const contact = route?.params?.contact || {
    name: 'Bilal Mustafa',
    img: require('../image/virk.jpg'),  // Default image if none provided
    role: 'UI Designer',
    organization: 'A2 Creative Designers',
  };

  const dialNumber = (number) => {
    Linking.openURL(`tel:${number}`);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Ionicons name="arrow-back" size={30} color="#7e5ff2" onPress={() => navigation.goBack(contact)} />
        <View style={{ flexDirection: 'row', }}>
          <Ionicons name="brush-outline" size={30} color="#7e5ff2" />
          <Ionicons name="heart" size={30} color="#7e5ff2" style={{marginHorizontal: 14,}} />
          <Ionicons name="filter-outline" size={30} color="#7e5ff2" />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image source={contact.img} style={styles.profileImage} />
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.role}>{contact.role} at </Text>
        <Text style={styles.role}>{contact.organization}</Text>
      </View>

      <View style={styles.contactInfo}>
        <TouchableOpacity onPress={() => dialNumber('923001560571')}>
          <View style={styles.phoneRow}>
            <Text style={styles.phoneText}>92 300 1560 571</Text>
            <View style={{flexDirection:'row',}}>
            <Ionicons name="share" size={25} color="#1C008A" style={{marginRight:10}} />
            <Ionicons name="call" size={25} color="#1C008A" />
            </View>
          </View>
          <Text style={styles.phoneLabel}>Personal</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dialNumber('923336560571')}>
          <View style={styles.phoneRow}>
            <Text style={styles.phoneText}>92 333 6560 571</Text>
            <View style={{flexDirection:'row',}}>
            <Ionicons name="share" size={25} color="#1C008A" style={{marginRight:10}} />
            <Ionicons name="call" size={25} color="#1C008A" />
            </View>
          </View>
          <Text style={styles.phoneLabel}>Work</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{    backgroundColor:"#DCDAE8",padding:10,borderRadius:10,marginTop:20}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={styles.organizationInfo}>
        <Text style={styles.label}>Organization</Text>
        <Text style={styles.text}>{contact.organization}</Text>
      </View>
      <Ionicons name="pin" size={25} color="#1C008A" />
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
    backgroundColor: '#f6f6f6',
    marginTop: 20,
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
    color: '#1C008A',
    marginTop: 10
  },
  role: {
    fontSize: 20,
    color: '#1C008A'
  },
  contactInfo: {
    backgroundColor:"#DCDAE8",
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
    color: '#1C008A',
    fontWeight:'bold'
  },
  phoneLabel: {
    fontSize: 17,
    color: '#1C008A'
  },
  organizationInfo: {
    marginTop: 0,

  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C008A'
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    color: '#1C008A'
  },
  workDescription: {
    marginTop: 20
  },
});
