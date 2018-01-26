import React, { Component } from 'react';
import AuthorizedHowlComponent from '../AuthorizedHowlComponent';
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
  ScrollView,
  TextInput,
  AsyncStorage
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonSave, Input, Spinner } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { editFirstName } from '../../actions';



const {height, width} = Dimensions.get('window');



class EditProfile extends AuthorizedHowlComponent {




  componentWillMount () {
      super.componentWillMount();
      Keyboard.dismiss();

      Actions.refresh({key: 'drawer', open: false });
      this._value = 0;
      //this.state.pressAction.addListener((v) => this._value = v.value);
      let AHC = this;
      let packEx = this.returnUserID().then(function(result){
        console.log(result);
        let packId = ({"UserID":result});
        AHC.authorizedHowlCall("AddEditUserHomeAddress", packId, AHC.getUserStuff);

        });
    }

    componentWillUnmount () {
      Keyboard.dismiss()
    }



    getUserStuff(x){

      let v_FirstName = x.AddEditUserHomeAddressResult.User.FirstName;
      let v_LastName = x.AddEditUserHomeAddressResult.User.LastName;
      let v_Email = x.AddEditUserHomeAddressResult.User.Email;
      let v_PhoneNumber = x.AddEditUserHomeAddressResult.User.MobilePhoneNumber;

      this.setState({"firstname":v_FirstName});
      this.setState({"lastname":v_LastName});
      this.setState({"emailaddress":v_Email});
      this.setState({"phonenumber":v_PhoneNumber});
      this.setState({"loading":false});

      console.log(this.state);

    }



constructor(props) {
  super(props)
    this.state = {
      validated: false,
      loading: false,
      error: ''
    }
    this.checkText = this.checkText.bind(this);
    this.getUserStuff = this.getUserStuff.bind(this);
    this.endLoading = this.endLoading.bind(this);
  }

  renderButton() {
    if (this.state.loading) {
       return <View style={styles.spinnerStyle}><Spinner size="large" /></View>
    }

    return (
      <BlueButtonSave onPress={this.checkText}/>
    );
  }



  onSaveFail() {
    this.setState({
      error: 'Something went Wrong',
      loading: false
    });
  }

  onSaveSuccess() {
    this.setState({

     loading: false,
      error: ''
     });

     Alert.alert('Your Profile has been updated.');

  }

checkText () {

  this.setState({ error: '', loading: true});

  //console.log(this.props);
  console.log(this.state);
  //const firstN   = this.props.firstname ;
  //const lastN   = this.props.lastname ;
  let e_firstname = this.state.firstname;
  let e_lastname = this.state.lastname;
  let e_email = this.state.emailaddress;
  let e_phonenumber = this.state.phonenumber;

  let e_userid = {
    'UserID':49,
    'FirstName':e_firstname,
    'LastName':e_lastname,
    'Email':e_email
  }

    this.authorizedHowlCall("UpdateUserProfile", e_userid, this.endLoading);

}

endLoading(x){

  console.log(x);

  this.setState({ error: '', loading: false});

  Alert.alert('Your profile has been updated.');
}


onNameChange(text){
  this.props.editFirstName(text);
}



  render () {

    return (
              <ScrollView>
                <View style={styles.container}>

                  <View>
                  <View>
                    <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>

                    <TextField
                      label='FIRST NAME'
                      style={styles.textStyle}
                      //onChangeText={this.onNameChange.bind(this)}
                      onChangeText = {(firstname) => this.setState({firstname})}
                      returnKeyType = {"next"}
                      onSubmitEditing={(event) => {
                        this.refs.SecondInput.focus();
                      }}
                      value={this.state.firstname}

                      />
                      <Icon name="ios-person-outline" size={30} style={styles.iconStyle}/>
                    </KeyboardAvoidingView>
                  </View>
                <View >
                  <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                    <TextField
                      label='LAST NAME'
                      onChangeText = {(lastname) => this.setState({lastname})}
                      ref='SecondInput'
                      value={this.state.lastname}
                      />
                      <Icon name="ios-person-outline" size={30} color="#999" style={styles.iconStyle}/>
                    </KeyboardAvoidingView>
                  </View>
                  <View >
                    <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                      <TextField
                        label='EMAIL ADDRESS'
                        onChangeText = {(emailaddress) => this.setState({emailaddress})}
                        value={this.state.emailaddress}
                        />
                        <Icon name="ios-mail-outline" size={30} color="#999" style={styles.iconStyle}/>
                      </KeyboardAvoidingView>
                    </View>

                    <View >
                      <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                        <TextField
                          label='PHONE NUMBER'
                          onChangeText = {(phonenumber) => this.setState({phonenumber})}
                          value={this.state.phonenumber}

                          />
                          <Icon name="ios-call-outline" size={30} color="#999" style={styles.iconStyle}/>
                        </KeyboardAvoidingView>
                      </View>
                    </View>

                      {this.renderButton()}





                </View>
              </ScrollView>

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

  },
  spinnerStyle:{
    marginTop:40
  }
}

const mapStateToProps = ({ setting }) => {
  const { firstname } = setting;

  return { firstname  };
};

export default connect(mapStateToProps, {
  editFirstName
 })(EditProfile);
