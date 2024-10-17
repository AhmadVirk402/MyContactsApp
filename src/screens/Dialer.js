import {React, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const contacts = [
  { id: '1', name: 'Ali Haider', time: '2 minutes ago', sim: 'SIM 2'  },
  { id: '2', name: 'Bilal Mustafa', img: require('../image/virk.jpg'), time: '2 minutes ago', sim: 'SIM 2'  },
  { id: '3', name: 'Qasim Ali',  time: '2 minutes ago', sim: 'SIM 1'  },
  { id: '4', name: 'Talha Khalid',  time: '2 minutes ago', sim: 'SIM 2'  },
];

const Dialer = () => {
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

  const [input, setInput] = useState(''); // to store the input

  // Function to handle key press
  const handlePress = (key) => {
    setInput((prev) => prev + key); // append pressed key to the input
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1)); // remove the last character
  };


  // Array to store the dialer keys
  const dialKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  return (
    <View style={styles.container}>
      {/* Contact List */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
        style={styles.contactList}
      />

<View style={styles.keypadContainer}>
      {/* Display Area */}
      <View style={styles.displayArea}>
        <Text style={styles.displayText}>{input}</Text>
        <TouchableOpacity onPress={handleBackspace} style={styles.backspaceButton}>
          <Ionicons name="backspace-outline" size={30} color="#4a4a7a" />
        </TouchableOpacity>
      </View>

      {/* Dial Pad */}
      <View style={styles.keypad}>
        {dialKeys.map((key) => (
          <TouchableOpacity key={key} style={styles.keypadButton} onPress={() => handlePress(key)}>
            <Text style={styles.keypadText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  contactList: { flex: 1 },
  contactRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
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
  
  keypadContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f1f1f9',
    borderRadius: 10,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 24,
    color: '#4a4a7a',
    fontWeight: 'bold',
    flex: 1,
  },
  backspaceButton: {
    paddingHorizontal: 10,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    backgroundColor:'#f1f1f9'
  },
  keypadButton: {
    width: '30%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  keypadText: {
    fontSize: 40,
    color: '#4a4a7a',
    fontWeight:'bold',
  },
 
});

export default Dialer;
