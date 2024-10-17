import { View, Text,StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Contacts from './Contacts';
import Recent from './Recent';
import Dialer from './Dialer';
import { Linking } from 'react-native';

const contacts = [
  { id: '1', name: 'Abdul Hameed' },
  { id: '2', name: 'Dr. Muhammad Noor Ul Hassan Zia' },
  { id: '3', name: 'Ahmad Mustafa' },
  { id: '4', name: 'Ayaz Hamza' },
  { id: '5', name: 'Shabbir Hussain' },
  { id: '6', name: 'Bilal Mustafa', img: require("../image/virk.jpg") },
];

// Function to trigger phone call
const dialNumber = (name) => {
  Linking.openURL(`tel:+123456789`);
};

const renderContactItem = ({ item }) => (
  <View style={styles.contactItem}>
    {/* Show Image if available, else show icon */}
    {item.img ? (
      <Image source={item.img} style={styles.avatar} />
    ) : (
      <Ionicons name="person-circle-outline" size={45} color="#7e5ff2" />
    )}
    
    {/* Contact Name */}
    <Text style={styles.contactName}>{item.name}</Text>
    
    {/* Phone Icon */}
    <TouchableOpacity onPress={() => dialNumber(item.name)}>
      <View style={styles.contactIcon}>
      <Ionicons name="call" size={24} color="#7e5ff2" />
      </View>
    </TouchableOpacity>
  </View>
);

const Fav = () => {
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
        <TouchableOpacity style={styles.filterButton}>
          <Text style={[styles.filterText,styles.nonActiveFilter]}onPress={()=>navigation.navigate(Recent)}>Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={styles.filterText}onPress={()=>navigation.navigate(Fav)}>Favourites</Text>
        </TouchableOpacity>
      </View>

   {/* Contact List */}
   <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />

    {/* Dialer Button */}
    <TouchableOpacity style={styles.dialerButton} onPress={()=>navigation.navigate(Dialer)}>
      <Ionicons name="keypad" size={24} color="white" />
    </TouchableOpacity>
  </View>
  )
}


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
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  contactName: {
    fontSize: 20,
    color: '#1C008A',
    flex: 1,
    marginLeft: 16,
  },
  contactIcon:{
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DCDAE8',
    borderRadius:50,
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
  contactList: {
    marginBottom: 16,
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

export default Fav