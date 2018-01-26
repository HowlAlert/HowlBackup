import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { Scene, Router, Actions, ActionConst, Drawer, TouchableHighlight } from 'react-native-router-flux';import { Card, CardSection, Button, HowlButton, FacebookButton, CreateButton, GoogleButton } from './common';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';
import Autolink from 'react-native-autolink';




class SettingsPanel extends AuthorizedHowlComponent {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
}



  render () {
    return (
      <View style={styles.mainPanel}>

        <TouchableOpacity onPress={() => Actions.editProfile()} style={styles.sideButton}>
          <View>
            <Icon name="user" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.getNotifications()} style={styles.sideButton}>
          <View>
            <Icon name="bell" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Notifications</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.changeAddress()} style={styles.sideButton}>
          <View>
            <Icon name="location-pin" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Change Home Address</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.changeCancel()} style={styles.sideButton}>
          <View>
            <Icon name="lock" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Change Cancel Code</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.changeSilent()} style={styles.sideButton}>
          <View>
            <Icon name="lock" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Change Silent Code</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.printCode()} style={styles.sideButton}>
          <View>
            <Icon name="speech" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Print Code</Text>
          </View>
        </TouchableOpacity>



        <TouchableOpacity onPress={() => Linking.openURL('mailto:test@gmail.com')} style={styles.sideButton} >
          <View>
            <Icon name="question" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Feedback</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('mailto:test@gmail.com')} style={styles.sideButton}>
          <View>
            <Icon name="envelope-open" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Contact Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.termsConditions()} style={styles.sideButton}>
          <View>
            <Icon name="speech" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Terms and Conditions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.privacyPolicy()} style={styles.sideButton}>
          <View>
            <Icon name="user" size={27} style={styles.iconStyle}/>
          </View>
          <View>
            <Text style={styles.sideText}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>











      </View>
    );
  }
}

const styles = {
  mainPanel:{


    flex:1
  },
  cameraStyle:{
    width:15,
    height:15
  },
  sideButton:{
    paddingBottom:15,
    flexDirection: 'row',
    borderBottomColor:'#dadada',
    borderBottomWidth:1,
    paddingTop:15
  },
  sideText:{
    fontSize:18,
    textAlign:'left',
    paddingLeft:20,
    paddingTop:7,
    color:'#333'
  }
}

export default SettingsPanel;
