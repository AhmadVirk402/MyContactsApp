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
import Dialer from '../Dialer';
import ContactsList from './contactsList';

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
          <Ionicons name="search-outline" size={30} color="#1C008A" />
          <Ionicons
            name="person-add-outline"
            size={30}
            color="#1C008A"
            style={styles.iconMargin}
          />
          <Ionicons name="options-outline" size={30} color="#1C008A" />
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
        {/* <TouchableOpacity
          style={styles.filterButton}
          // onPress={() => navigation.navigate(Recent)}
          onPress={() => setSelecetedTopTab('recent')}>
          <Text style={[styles.filterText, styles.nonActiveFilter]}>
            Recent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          // onPress={() => navigation.navigate(Fav)}
          onPress={() => setSelecetedTopTab('favourite')}>
          <Text style={[styles.filterText, styles.nonActiveFilter]}>
            Favourites
          </Text>
        </TouchableOpacity> */}
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
        onPress={() => navigation.navigate(Dialer)}>
        <Ionicons name="keypad" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}



const RecentsList = () => {
  return (
    <View>
      <Text>Recent</Text>
    </View>
  );
};

const FavouriteList = () => {
  return (
    <View>
      <Text>Favourite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#f6f6f6',
    marginTop: 20,
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
    backgroundColor: '#DCDAE8',
  },
  activeFilter: {
    backgroundColor: '#7e5ff2',
  },
  nonActiveFilter: {
    color: '#7e5ff2',
  },
  filterText: {
    color: '#fff',
    fontSize: 16,
  },
  contactList: {
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  contactName: {
    marginLeft: 16,
    fontSize: 20,
    color: '#1C008A',
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
    backgroundColor: '#7e5ff2',
    borderRadius: 7,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
