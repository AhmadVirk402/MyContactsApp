import { React, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../utilities/colors';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';

const contacts = [
  { id: '1', name: 'Ali Haider', time: '2 minutes ago', sim: 'SIM 2' },
  {
    id: '2',
    name: 'Bilal Mustafa',
    img: require('../image/virk.jpg'),
    time: '2 minutes ago',
    sim: 'SIM 2',
  },
  { id: '3', name: 'Qasim Ali', time: '2 minutes ago', sim: 'SIM 1' },
  { id: '4', name: 'Talha Khalid', time: '2 minutes ago', sim: 'SIM 2' },
];

const Dialer = () => {
  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      {item.img ? (
        <Image source={item.img} style={styles.avatar} />
      ) : (
        <Ionicons name="person-circle-outline" size={45} color={COLORS.secondary} />
      )}
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(4) }}>
          <Ionicons name="call" size={16} color={COLORS.red} />
          <Text style={styles.timeText}>{item.time}</Text>
          <Text style={styles.simInfo}>{item.sim}</Text>
        </View>
      </View>
    </View>
  );

  const [input, setInput] = useState(''); // to store the input

  // Function to handle key press
  const handlePress = key => {
    setInput(prev => prev + key); // append pressed key to the input
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setInput(prev => prev.slice(0, -1)); // remove the last character
  };

  // Array to store the dialer keys
  const dialKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  return (
    <View style={styles.container}>
      {/* Contact List */}
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderContactItem}
        style={styles.contactList}
      />

      <View style={styles.keypadContainer}>
        {/* Display Area */}
        <View style={styles.displayArea}>
          <Text style={styles.displayText}>{input}</Text>
          <TouchableOpacity
            onPress={handleBackspace}
            style={styles.backspaceButton}>
            <Ionicons name="backspace-outline" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Dial Pad */}
        <View style={styles.keypad}>
          {dialKeys.map(key => (
            <TouchableOpacity
              key={key}
              style={styles.keypadButton}
              onPress={() => handlePress(key)}>
              <Text style={styles.keypadText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveHeight(2),
    backgroundColor: COLORS.white
  },
  contactList: {
    flex: 1
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveHeight(1)
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1.5),
    borderBottomWidth: responsiveWidth(.4),
    borderBottomColor: COLORS.white,
  },
  avatar: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    borderRadius: responsiveHeight(3),
  },
  contactList: {
    marginBottom: responsiveHeight(3),
  },
  contactInfo: {
    flex: 1,
    marginLeft: responsiveWidth(4),
  },
  contactName: {
    marginLeft: responsiveWidth(4),
    fontSize: responsiveFont(20),
    color: COLORS.primary,
    fontFamily:'Roboto-Regular'
  },
  timeText: {
    color: COLORS.grey,
    fontSize: responsiveFont(15),
     fontFamily:'Roboto-Regular'
  },
  simInfo: {
    color: COLORS.green,
    fontSize: responsiveFont(11),
    fontWeight: 'bold',
    marginLeft: responsiveWidth(2),
     fontFamily:'Roboto-Regular'
  },

  keypadContainer: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(90),
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1.5),
    backgroundColor: COLORS.light,
    borderRadius: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  displayText: {
    fontSize: responsiveFont(24),
    color: COLORS.primary,
    fontWeight: 'bold',
    flex: 1,
     fontFamily:'Roboto-Regular'
  },
  backspaceButton: {
    paddingHorizontal: responsiveWidth(3),
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: responsiveWidth(90),
    backgroundColor: COLORS.light,
  },
  keypadButton: {
    width: '30%',
    height: responsiveHeight(11),
    justifyContent: 'center',
    alignItems: 'center',
    margin: responsiveHeight(.5),
  },
  keypadText: {
    fontSize: responsiveFont(40),
    color: COLORS.primary,
     fontFamily:'Roboto-Bold'
  },
});

export default Dialer;
