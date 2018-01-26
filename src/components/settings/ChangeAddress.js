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
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { connect } from 'react-redux';
import { editFirstName } from '../../actions';



const {height, width} = Dimensions.get('window');



class ChangeAddress extends AuthorizedHowlComponent {




  componentWillMount () {
      super.componentWillMount();
      Keyboard.dismiss();
      Actions.refresh({key: 'drawer', open: false });
      let packEx = {'UserID':49}
      this.authorizedHowlCall("AddEditUserHomeAddress", packEx, this.getUserStuff);
      //trying to update

      var b = AsyncStorage.getItem('fn1');
      console.log(b);


    }

    componentWillUnmount () {
      Keyboard.dismiss()
    }



    getUserStuff(x){


      let v_Address = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Address1;
      let v_Apartment = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Address2;

      let v_HomeCity = x.AddEditUserHomeAddressResult.GetUserHomeAddress.HomeCity;
      let v_HomeState = x.AddEditUserHomeAddressResult.GetUserHomeAddress.HomeState;
      let v_HomeZip = x.AddEditUserHomeAddressResult.GetUserHomeAddress.HomeZip;
      let v_Latitude = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Latitude;
      let v_Longitude = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Longitude;

      //<param name="UserID">User ID</param>
      /// <param name="UserToken">User Token</param>
      /// <param name="HomeAddress1">Home Address1</param>
      /// <param name="HomeAddress2">Home Address2</param>
      /// <param name="HomeCity">Home City</param>
      /// <param name="HomeState">Home State</param>
      /// <param name="HomeZip">Home Zip</param>
      /// <param name="Latitude">Latitude</param>
      /// <param name="Longitude">Longitude</param>


      this.setState({"address":v_Address});
      this.setState({"apartment":v_Apartment});
      this.setState({"homecity":v_HomeCity});
      this.setState({"homestate":v_HomeState});
      this.setState({"homezip":v_HomeZip});
      this.setState({"latitude":v_Latitude});
      this.setState({"longitude":v_Longitude});

      this.setState({"loading":false});


      console.log(x);
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
  let e_address = this.state.address;
  let e_apartment = this.state.apartment;

  let e_homecity = this.state.homecity;
  let e_homestate = this.state.homestate;
  let e_homezip = this.state.homezip;
  let e_latitude = this.state.latitude;
  let e_longitude = this.state.longitude;



  let e_userobject = {
    'UserID':49,
    'HomeAddress1':e_address,
    'HomeAddress2':e_apartment,
    'HomeCity':e_homecity,
    'HomeState':e_homestate,
    'HomeZip':e_homezip,
    'Latitude':e_latitude,
    'Longitude':e_longitude
  }

    this.authorizedHowlCall("AddEditUserHomeAddress", e_userobject, this.endLoading);

}

endLoading(x){

  console.log(x);

  this.setState({ error: '', loading: false});

  Alert.alert('Your address has been updated.');
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
                      label='ENTER ADDRESS'
                      style={styles.textStyle}
                      //onChangeText={this.onNameChange.bind(this)}
                      onChangeText = {(firstname) => this.setState({firstname})}
                      returnKeyType = {"next"}
                      onSubmitEditing={(event) => {
                        this.refs.SecondInput.focus();
                      }}
                      value={this.state.firstname}

                      />
                      <Icon name="location-pin"  style={styles.iconStyle}/>
                    </KeyboardAvoidingView>
                  </View>
                <View >
                  <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                    <TextField
                      label='APT / FLOOR'
                      onChangeText = {(lastname) => this.setState({lastname})}
                      ref='SecondInput'
                      value={this.state.lastname}
                      />
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
})(ChangeAddress);
