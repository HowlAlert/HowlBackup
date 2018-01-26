import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonNext, Input } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CodePin from 'react-native-pin-code';
import { connect } from 'react-redux';
import { createPass } from '../../actions';
import PasswordInputText from 'react-native-hide-show-password-input';




const {height, width} = Dimensions.get('window');

const tooShort = {
      enabled: true,
      label: 'Too short',
      labelColor: 'red'
}

const strengthLevels = [
      {
        label: 'Weak',
        labelColor: '#999',
        widthPercent: '33',
        innerBarColor: '#fe6c6c'
      },
      {
        label: 'Weak',
        labelColor: '#999',
        widthPercent: '33',
        innerBarColor: '#fe6c6c'
      },
      {
        label: 'Fair',
        labelColor: '#999',
        widthPercent: '67',
        innerBarColor: '#feb466'
      },
      {
        label: 'Fair',
        labelColor: '#999',
        widthPercent: '67',
        innerBarColor: '#feb466'
      },
      {
        label: 'Strong',
        labelColor: '#999',
        widthPercent: '100',
        innerBarColor: '#6cfeb5'
      }
];



class CreatePass extends Component {




  componentWillMount () {
      Keyboard.dismiss();
    }

    componentWillUnmount () {
      Keyboard.dismiss();
    }


  onPasswordChange(text){
    this.props.createPass(text);
  }


    constructor(props) {

    super(props)

    this.state = {


      password: {
        value: '',
        isValid: false
      }

    }
      this.checkText = this.checkText.bind(this);

  }
      checkText () {

        console.log(this.state);



        const mypass   = this.props.password ;


        if(mypass == '' )
        {
        Alert.alert("Please Enter A Valid Password");
        }
        else{

        Actions.verifyPhone()

        }
       }


       _onChangePassword(password, isValid) {
           this.setState({ password: { value: password, isValid: isValid } });
           console.log(this.state);
         }






  render () {

    return (
              <ScrollView>
                <View style={styles.container}>
                  <Image style={styles.imageStyle} source={require('../../assets/images/introPass.png')} />
                  <Text style={styles.text}>YOUR PASSWORD</Text>
                  <View>
                  <View>



                  <Icon name="lock" size={25} color="#999" style={styles.iconStyle}/>




                </View>

                    </View>
                  <BlueButtonNext onPress={Actions.verifyPhone}/>
                </View>
              </ScrollView>
            );
          }
        }

        const styles = {
          input:{
            color:'#333'
          },
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
          inputStyle:{
            color:'#333',
            fontSize:16,
            labelColor:'#333'
          },
          wrapperStyle:{

            borderColor:'#999',
            marginBottom:15
          },
          iconStyle:{
            position:'absolute',
            right:0,
            top:10
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

        const mapStateToProps = ({ signup }) => {
          const { password } = signup;

          return { password };
        };

        export default connect(mapStateToProps, {
           createPass
         })(CreatePass);
