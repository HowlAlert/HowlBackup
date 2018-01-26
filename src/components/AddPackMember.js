import React, { Component } from 'react';
import ContactsWrapper from 'react-native-contacts-wrapper';
import { connect, store } from 'react-redux';
import { packnameChanged, packemailChanged, packphoneChanged } from '../actions'
import { Card, CardSection, Input, Button, CreateButton } from './common';
import Spinner from 'react-native-loading-spinner-overlay';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';


class AddPackMember extends AuthorizedHowlComponent {




  constructor(props) {
        super(props);
        this.onButtonPressed = this.onButtonPressed.bind(this);
        this.state = {
          packName: '',
          packPhone:'',
          packEmail:'',
          isLoading: true

        };
        this.endLoading = this.endLoading.bind(this);
  }

  onPackNameChange(text){
    this.props.packnameChanged(text);
  }

  onPackEmailChange(text) {
    this.props.packemailChanged(text);
  }

  onPackPhoneChange(text, store) {
    this.props.packphoneChanged(text);
  }

  async returnPackName(){
      return this.returnAsync('pack_name');
  }
  async returnPackPhone(){
      return this.returnAsync('pack_phone');
  }
  async returnPackEmail(){
      return this.returnAsync('pack_email');
  }

  componentWillMount () {

    super.componentWillMount();

    console.log(this.state);

    let AHC = this;

    let packNAME = this.returnPackName().then(function(result){
      console.log(result);
      AHC.setState({packName : result});
      console.log(AHC.state);
    });


    let packPHONE = this.returnPackPhone().then(function(result){
      console.log(result);
      AHC.setState({packPhone : result});
      console.log(AHC.state);
    });


    let packEMAIL = this.returnPackEmail().then(function(result){
      console.log(result);
      AHC.setState({packEmail : result});
      console.log(AHC.state);
    }, this.endLoading());

}


  endLoading(){
  //  console.log(x.GetUserPackResult);
    //this.setState({ error: '', loading: false});
    let GMP = this;


     this.setState({
       isLoading: false
     });
     console.log(this.state);
  }



  onButtonPress() {
    const { email, password } = this.props; // destructuring
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <CreateButton
        onPress={this.onButtonPress.bind(this)}>
        SAVE
      </CreateButton>
    );
  }


  logPackName () {
    console.log(this.state);
    sconsole.log(this.props);
  }

  onButtonPressed() {
        ContactsWrapper.getContact()
        .then((contact) => {
            const contact2 = contact;

            console.log(contact);
            console.log(this.props);
            console.log(contact.phone);
            this.setState({packname: contact.name});
            this.setState({packphone: contact.phone});
            this.setState({packemail: contact.email})
        })
        .catch((error) => {
            console.log("ERROR CODE: ", error.code);
            console.log("ERROR MESSAGE: ", error.message);
        });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 65}}>
          <Spinner overlayColor={"rgba(28, 89, 115, 0.90)"} animation={'fade'} visible={true} textContent={"Loading..."} size={'large'} textStyle={{color: '#FFF'}} />
        </View>
      );
    }
    return (
      <View style = {styles.container}>

        <TouchableOpacity onPress = {this.onButtonPressed}>
          <View style = {styles.buttonWrapper}>
            <Text style = {styles.buttonText}>IMPORT FROM CONTACTS</Text>
          </View>
        </TouchableOpacity>



        <View style={styles.loginStyle}>

          <View style={styles.inputStyle}>
          <TextField
            label='NAME'
            onChangeText={this.onPackNameChange.bind(this)}
            value={this.state.packName}
          />
          <Icon name="user" size={20} color="#999" style={styles.iconStyle}/>
          </View>

          <View>
          <TextField
            label='MOBILE PHONE'
            onChangeText={this.onPackPhoneChange.bind(this)}
            value={this.state.packPhone}
          />
            <Icon name="phone" size={20} color="#999" style={styles.iconStyle}/>
          </View>
          <View>
            <TextField
              label='EMAIL ADDRESS'
              onChangeText={this.onPackEmailChange.bind(this)}
              value={this.state.packEmail}
            />
            <Icon name="envelope" size={20} color="#999" style={styles.iconStyle}/>
          </View>
        </View>

        <CardSection>
          {this.renderButton()}
        </CardSection>
     </View>

        );
    }
}

const styles = StyleSheet.create({
  iconStyle:{
    position:'absolute',
    right:0,
    top:30
  },
  inputStyle:{

  },
  container: {
    flex: 1,
    paddingLeft:40,
    paddingRight:40
  },
  buttonWrapper: {
      marginTop: 70,

      flexDirection: 'column',
      borderRadius: 4
  },
  buttonText: {
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal: 20,
      elevation: 1,
      color: '#0091cd',
      textDecorationLine: 'underline'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  logoStyle:{
    width:70,
    height:80,
    alignSelf:'center',
    marginBottom:20
  },
  loginStyle:{

    marginTop:20
  },
  textStyle:{
    color:'#999',
    fontSize:14,
    marginTop:10,
    alignSelf:'center'
  },
  importStyle:{
     color:'#0091cd',
     marginTop:10,
     marginBottom:10,
     textAlign:'center'
  }
});


const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   packnameChanged, packemailChanged, packphoneChanged
 })(AddPackMember);
