import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  ScrollView
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonNext, Input } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';



class VoiceWarning extends Component {


    constructor(props) {

    super(props)

    this.state = {

      TextEmail: ''


    }
      this.checkText = this.checkText.bind(this);

  }
      checkText () {

        console.log(this.state);

        const { TextEmail }  = this.state ;


        if(TextEmail == '' )
        {
        Alert.alert("Please Enter A First and Last Name");
        }
        else{

        Actions.createPass()

        }
       }



  render () {

    return (

                <View style={styles.slide1}>
                  <Image style={styles.imageStyle} source={require('../../assets/images/introEmail.png')} />
                  <Text style={styles.text}>WARNING</Text>
                  <Text style={styles.smallText}>Speak your Cancellation Code to your smart hub (or type it into your app) to cancel your HOWL alert and stop the alerm. "Be sure to mae this a code you will remember"</Text>
                  <View>
                  <View>
                  <TextField
                    label='EMAIL ADDRESS'
                    style={styles.textStyle}
                    keyboardType={'email-address'}
                    onChangeText={TextEmail => this.setState({TextEmail})}
                    />
                    <Icon name="envelope" size={20} color="#999" style={styles.iconStyle}/>
                </View>

                    </View>
                  <BlueButtonNext onPress={this.checkText}/>
                </View>

            );
          }
        }

        const styles = {
          container:{
             flex            : 1,
             justifyContent  : 'center',
             backgroundColor : '#F5FCFF',
             paddingLeft:30,
             paddingRight:30,
             backgroundColor:'#fff',
             paddingTop:65,
             paddingBottom:30
          },
          iconStyle:{
            position:'absolute',
            right:0,
            top:30
          },
          wrapper: {
            marginTop:0,
            paddingTop:0
          },
          imageStyle:{
            width:180,
            height:180,
            marginBottom:20,
            alignSelf:'center'
          },
          slide1: {

            flex: 1,
            justifyContent: 'flex-start',

            alignSelf: 'stretch',
            paddingTop:80,
            paddingLeft:40,
            paddingRight:40

          },
          slide2: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop:40

          },
          slide3: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop:40
          },
          text: {
            color: '#000',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign:'center',
            paddingRight:10,
            paddingLeft:10,
            marginBottom:20
          },
          text2:{
            color:'#6d6e70',
            fontSize:14,
            textAlign:'center',
            paddingRight:40,
            paddingLeft:40,
            lineHeight:30
          },
          buttonStyle:{
            paddingVertical: 140
          },
          textStyle:{

          }
        }

export default VoiceWarning;
