import React from 'react';
import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../utilities/colors';
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import Fonts from '../utilities/fonts';

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
    padding: responsiveHeight(4),
    paddingTop:responsiveHeight(6),
    backgroundColor: COLORS.white,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: responsiveHeight(5)
  },
  profileImage: {
    width: responsiveWidth(37.5),
    height: responsiveHeight(20),
    borderRadius: responsiveHeight(3)
  },
  name: {
    fontSize: responsiveFont(25),
    color: COLORS.primary,
    textAlign:'center',
    marginTop: responsiveHeight(3),
     fontFamily:Fonts.RobotoBold,
  },
  role: {
    fontSize: responsiveFont(20),
    color: COLORS.primary,
     fontFamily:Fonts.RobotoRegular,
  },
  contactInfo: {
    backgroundColor:COLORS.light,
    padding:responsiveHeight(3),
    borderRadius:responsiveHeight(1),
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(0.5),
  },
  phoneText: {
    fontSize: responsiveFont(20),
    color: COLORS.primary,
     fontFamily:Fonts.RobotoBold,
  },
  phoneLabel: {
    fontSize: responsiveFont(17),
    color: COLORS.primary,
     fontFamily:Fonts.RobotoRegular,
  },
  organizationInfo: {
    marginTop:responsiveHeight(0),
     fontFamily:Fonts.RobotoRegular,

  },
  label: {
    fontSize:responsiveFont(20),
    fontWeight: 'bold',
    color:COLORS.primary,
     fontFamily:Fonts.RobotoRegular,
  },
  text: {
    fontSize: responsiveFont(16),
    marginTop: responsiveHeight(.5),
    color:COLORS.primary,
     fontFamily:Fonts.RobotoRegular,
  },
  workDescription: {
    marginTop: responsiveHeight(3),
     fontFamily:Fonts.RobotoRegular,
  },
});
