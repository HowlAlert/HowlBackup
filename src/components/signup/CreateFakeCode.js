import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonNext, Input } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CodePin from 'react-native-pin-code';

const {height, width} = Dimensions.get('window');

class CreateFakeCode extends Component {

  componentWillMount () {
      Keyboard.dismiss();
    }

    componentWillUnmount () {
      Keyboard.dismiss()
    }


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

        Actions.voiceWarning()

        }
       }



  render () {

    return (

              <ScrollView>
                <View style={styles.container}>
                  <Image style={styles.imageStyle} source={require('../../assets/images/cancelcode.png')} />
                  <Text style={styles.text}>CREATE SILENT ALARM (FAKE CANCELLATION) CODE</Text>
                  <Text style={styles.smallText}>Speak your Silent Alarrm "Fake Cancellation" Code to your smart hub (or type it into your app) if a perpatrato/threat causes you to cancel the alert. The alarm will silence. However your alert will proceed. "Be sure to make this a code you will remember"</Text>
                  <View>
                  <View>

                  <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                    <CodePin

                      keyboardType={'phone-pad'}
                      containerPinStyle={{height:50, backgroundColor:'#fff'}}
                      containerStyle={{}}
                      ref={ref => this.ref = ref}
                      code="CODE"
                      text=''
                      pinStyle={{fontSize:25, color:'#000', backgroundColor:'#fff'}}
                      success={this.onSuccess}
                    />
                  </KeyboardAvoidingView>

                </View>

                    </View>
                  <BlueButtonNext onPress={this.checkText}/>
                </View>
              </ScrollView>

            );
          }
        }

        const styles = {

          iconStyle:{
            position:'absolute',
            right:0,
            top:30
          },
          smallText:{
            textAlign:'center'
          },

          imageStyle:{
            width:180,
            height:180,
            marginBottom:20,
            alignSelf:'center'
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

          buttonStyle:{
            paddingVertical: 140
          },

           container: {
             flex            : 1,
          justifyContent  : 'center',
          alignItems      : 'center',
          backgroundColor : '#F5FCFF',
          paddingLeft:30,
          paddingRight:30,
          backgroundColor:'#fff',
          paddingTop:65,
          paddingBottom:30

          },
          blur: {
            position        : 'absolute',
            justifyContent  : 'center',
            alignItems      : 'center',
            top             : 0,
            left            : 0,
            width           : width,
            height          : height
          },
          avoidingView: {

          },

          success: {
            fontSize    : 20,
            color       : 'green',
            textAlign   : 'center'
          }
        }

export default CreateFakeCode;
