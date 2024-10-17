import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Contacts from './Contacts';
import Fav from './Fav';
import Dialer from './Dialer';
const contacts = [
  { id: '1', name: 'Ali Haider', time: '2 minutes ago', sim: 'SIM 2' },
  { id: '2', name: 'Zain Fellow', time: '2 minutes ago', sim: 'SIM 1' },
  { id: '3', name: 'Bilal Mustafa', time: '2 minutes ago', sim: 'SIM 1', img: require("../image/virk.jpg") },
  { id: '4', name: 'Partner', time: '5 minutes ago', sim: 'SIM 2' },
  { id: '5', name: 'School', time: '6 minutes ago', sim: 'SIM 2' },
  { id: '6', name: 'Zain Ul Abedin', time: '2 minutes ago', sim: 'SIM 1' },
  { id: '7', name: 'Moosa Haider', time: '4 minutes ago', sim: 'SIM 1' },
  { id: '8', name: '92 331 1231231', time: '3 minutes ago', sim: 'SIM 2' },
];

const Recent = () => {

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      {item.img ? (
        <Image source={item.img} style={styles.avatar} />
      ) : (
        <Ionicons name="person-circle-outline" size={45} color="#7e5ff2" />
      )}
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <View style={{flexDirection:'row',marginLeft:16,}}>
        <Ionicons name="call" size={16} color="red" />
        <Text style={styles.timeText}>{item.time}</Text>
        <Text style={styles.simInfo}>{item.sim}</Text>
        </View>
      </View>
      
    </View>
  );
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Contacts</Text>
      <View style={styles.headerIcons}>
        <Ionicons name="search-outline" size={30} color="#1C008A" />
        <Ionicons name="person-add-outline" size={30} color="#1C008A" style={styles.iconMargin} />
        <Ionicons name="options-outline" size={30} color="#1C008A" />
      </View>
    </View>

    {/* Filter Buttons */}
    <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={[styles.filterText,styles.nonActiveFilter]} onPress={()=>navigation.navigate(Contacts)}>All Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={styles.filterText}onPress={()=>navigation.navigate(Recent)}>Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={[styles.filterText,styles.nonActiveFilter]}onPress={()=>navigation.navigate(Fav)}>Favourites</Text>
        </TouchableOpacity>
      </View>

    {/* Contact List */}
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={renderContactItem}
      contentContainerStyle={styles.contactList}
    />

    {/* Dialer Button */}
    <TouchableOpacity style={styles.dialerButton} onPress={()=>navigation.navigate(Dialer)}>
      <Ionicons name="keypad" size={24} color="white" />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#f6f6f6',
    marginTop:20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 34,
    color: '#1C008A',
    fontWeight:'bold'
  },
  headerIcons: {
    flexDirection: 'row',
    
  },
  iconMargin: {
    marginHorizontal: 16,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
 
 
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
   contactList: {
    marginBottom: 16,
  },
  contactInfo: {
    flex: 1,
    marginLeft: 15,
  },
  contactName: {
    marginLeft: 16,
    fontSize: 20,
    color: '#1C008A',
  },
  timeText: {
    color: '#a3a3c2',
    fontSize: 15,
  },
  simInfo: {
    color: '#4caf50',
    fontSize: 11,
    fontWeight:'bold',
    marginLeft:6,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#DCDAE8',
  },
  activeFilter: {
    backgroundColor: '#7e5ff2',
  },
  nonActiveFilter: {
    color:'#7e5ff2',
  },
  filterText: {
    color: '#fff',
    fontSize:16
  },
  dialerButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#7e5ff2',
    borderRadius: 7,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Recent;
