import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
 } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton, FacebookButton, CreateButton, GoogleButton } from './common';
import HowlComponent from './HowlComponent';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';



class LandingScreen extends AuthorizedHowlComponent {
  render () {

    super.render();
    return (


        <View style={styles.containerStyle}>
        <Image style={styles.treeStyle} source={require('../assets/images/treesfull.png')}>
        <ScrollView>
        <Image style={styles.logoStyle} source={require('../assets/images/howlMain.png')} />

          <CardSection>
            <FacebookButton>
              LOG IN WITH FACEBOOK
            </FacebookButton>
          </CardSection>

          <CardSection>
            <GoogleButton onPress={() => Actions.drawer()}>
              LOG IN WITH GOOGLE
            </GoogleButton>
          </CardSection>

            <Text style={{textAlign:'center', marginTop:10, marginBottom:0}}>OR</Text>

            <View style={{paddingLeft:20,paddingRight:20}}>
          <CardSection>
            <CreateButton onPress={() => Actions.createName()} >
              CREATE ACCOUNT
            </CreateButton>
          </CardSection>
          </View>

          <Text style={{textAlign:'center', marginTop:10, marginBottom:10}}>Have an account?</Text>

          <TouchableOpacity style={styles.homeButton} onPress={() => Actions.login()}>
            <View><Text style={styles.homeText}>LOGIN</Text></View>
          </TouchableOpacity>
          </ScrollView>
        </Image>
        </View>



    );
  }
}

const styles = {
  containerStyle:{

  },
  logoStyle:{
    width:90,
    height:110,
    alignSelf:'center',
    marginBottom:20,
    marginTop:0,
    paddingTop:0,
    marginBottom:40
  },
  treeStyle:{
    width: '100%',
    height: '100%',
    paddingTop:30
  },
  homeText:{
    color:'#d34836',
    textAlign:'center',
    fontSize:18
  },
  homeButton:{
    marginBottom:30,
    paddingBottom:30
  }
}

export default LandingScreen;
