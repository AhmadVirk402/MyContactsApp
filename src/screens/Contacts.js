import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../utilities/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking } from 'react-native';
import Output from './Output';

// Sample contact data
const contactData = [
  {id: '1', name: 'Abdul Hameed', img: null},
  {id: '2', name: 'Dr. Muhammad Noor Ul Hassan', img: null},
  {id: '3', name: 'Riaz', img: null},
  {id: '4', name: 'Bilal Mustafa', img: require('../image/virk.jpg')}, // Example image URL
  {id: '5', name: 'Bhai Muhammad', img: null},
  {id: '6', name: 'Maqsood Ali', img: null},
  {id: '7', name: 'Mehran Shah', img: null},
  {id: '8', name: 'Zubair Roommate', img: null},
];

const topTabs = [
  {id: '1', label: 'All Contacts',},
  {id: '2', label: 'Recent',},
  {id: '3', label: 'Favourites',},
];

// Main Contacts Screen
export default function Contacts() {
  const navigation = useNavigation();

  const [selectedTopTab, setSelecetedTopTab] = useState(0);

  useEffect(() => {
    console.log('selectedTopTab: ', selectedTopTab);
  }, [selectedTopTab]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contacts</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
          <Ionicons name="search-outline" size={30} color={COLORS.primary} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Ionicons
            name="person-add-outline"
            size={30}
            color={COLORS.primary}
            style={styles.iconMargin}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <Ionicons name="options-outline" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {topTabs.map((item, index) => {
          //const isActiveTab = selectedTopTab === item.value;
          const isActiveTab = selectedTopTab === index;
          return (
            <TouchableOpacity
              style={[styles.filterButton, isActiveTab && styles.activeFilter]}
              //onPress={() => navigation.navigate(Contacts)}
              onPress={() => setSelecetedTopTab(index)}>
              <Text
                style={[
                  styles.filterText,
                  !isActiveTab && styles.nonActiveFilter,
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>
      {selectedTopTab === 0 ? (
        <ContactsList data={contactData} />
      ) : selectedTopTab === 1  ? (
        <RecentsList />
      ) : selectedTopTab === 2  ? (
        <FavouriteList />
      ) : null}
      {/* Dialer Button */}
      <TouchableOpacity
        style={styles.dialerButton}
        onPress={() => navigation.navigate("Dialer")}>
        <Ionicons name="keypad" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}




const ContactsList = ({data}) => {
  // Contact List Item Component
  const ContactItem = ({contactData}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={styles.contactItem}
        onPress={() => navigation.navigate("Details", {contact: contactData})}>
        {contactData.img ? (
          <Image source={contactData.img} style={styles.contactImage} />
        ) : (
          <Ionicons name="person-circle-outline" size={45} color={COLORS.secondary} />
        )}
        
        <Text style={styles.contactName}>{contactData.name}</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <View>
      <ScrollView>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (<ContactItem contactData={item} />)}
      contentContainerStyle={styles.contactList}
    />
    <Output/>
    </ScrollView>
    </View>
  );
};



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

const RecentsList = () => {
  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      {item.img ? (
        <Image source={item.img} style={styles.contactImage} />
      ) : (
        <Ionicons name="person-circle-outline" size={45} color={COLORS.secondary} />
      )}
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <View style={{flexDirection:'row',marginLeft:16,}}>
        <Ionicons name="call" size={16} color={COLORS.red} />
        <Text style={styles.timeText}>{item.time}</Text>
        <Text style={styles.simInfo}>{item.sim}</Text>
        </View>
      </View>
      
    </View>
  );
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={renderContactItem}
      contentContainerStyle={styles.contactList}
    />
 
  );
};



const contactss = [
  { id: '1', name: 'Abdul Hameed' },
  { id: '2', name: 'Dr. Muhammad Noor Ul Hassan Zia' },
  { id: '3', name: 'Ahmad Mustafa' },
  { id: '4', name: 'Ayaz Hamza' },
  { id: '5', name: 'Shabbir Hussain' },
  { id: '6', name: 'Bilal Mustafa', img: require("../image/virk.jpg") },
];
const dialNumber = (name) => {
  Linking.openURL(`tel:+123456789`);
};

const renderContactItem = ({ item }) => (
  <View style={styles.contactItems}>
    {/* Show Image if available, else show icon */}
    {item.img ? (
      <Image source={item.img} style={styles.contactImage} />
    ) : (
      <Ionicons name="person-circle-outline" size={45} color={COLORS.secondary}/>
    )}
    
    {/* Contact Name */}
    <Text style={styles.contactName}>{item.name}</Text>
    
    {/* Phone Icon */}
    <TouchableOpacity onPress={() => dialNumber(item.name)}>
      <View style={styles.contactIcon}>
      <Ionicons name="call" size={24} color={COLORS.secondary} />
      </View>
    </TouchableOpacity>
  </View>
);
const FavouriteList = () => {
  return (
   <FlatList
        data={contactss}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 0 }}
      />

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: COLORS.white,
    paddingTop:40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 34,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginHorizontal: 16,
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
    backgroundColor: COLORS.light,
  },
  activeFilter: {
    backgroundColor:COLORS.secondary,
  },
  nonActiveFilter: {
    color: COLORS.secondary,
  },
  filterText: {
    color: COLORS.white,
    fontSize: 16,
  },
  contactList: {
    marginBottom: -15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
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
  dialerButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor:COLORS.secondary,
    borderRadius: 7,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  simInfo: {
    color: COLORS.green,
    fontSize: 11,
    fontWeight:'bold',
    marginLeft:6,
  },
  timeText: {
    color: COLORS.grey,
    fontSize: 15,
  },
  contactItems: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  contactName: {
    fontSize: 20,
    color: COLORS.primary,
    flex: 1,
    marginLeft: 16,
  },
  contactIcon:{
    width:40,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.light,
    borderRadius:50,
  },
 
});
