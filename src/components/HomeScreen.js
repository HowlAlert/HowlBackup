import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, TouchableWithoutFeedback, AsyncStorage, Easing, PanResponder, ScrollView } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton } from './common';
import EmployeeCreate from './EmployeeCreate';
import CameraMain from './CameraMain';
import DevicesMain from './DevicesMain';
import MyPackMain from './MyPackMain';
import MonitoringMain from './MonitoringMain';
import { AnimatedCircularProgress, CircularProgress } from 'react-native-circular-progress';
import  AuthorizedHowlComponent  from './AuthorizedHowlComponent';
import { connect } from 'react-redux';
import { editFirstName, editLastName, editEmail, editPhone } from '../actions';


var ACTION_TIMER = 5000;
const MAX_POINTS = 3;
var COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)'];

import Spinner from 'react-native-loading-spinner-overlay';


class HomeScreen extends AuthorizedHowlComponent {



  constructor(props) {
    super(props);
    this.state = {
      pressAction: new Animated.Value(0),
      textComplete: '',
      buttonWidth: 0,
      buttonHeight: 0,
      showCancel: false,
      showHome:true,
      opacity:1,
      firstname: this.state.firstname,
      latitude: '',
      longitude: '',
      error: '',
      emergencytype: '',
      userid: ''

     };
      this.handlePressIn = this.handlePressIn.bind(this);
      this.handlePressOut = this.handlePressOut.bind(this);
      this.getButtonWidthLayout = this.getButtonWidthLayout.bind(this);
      this.animationActionComplete = this.animationActionComplete.bind(this);
      this.afterAlert = this.afterAlert.bind(this);
      this.getButtonWidthLayout = this.getButtonWidthLayout.bind(this);
      this.showProgress = this.showProgress.bind(this);
      this.getUserStuff = this.getUserStuff.bind(this);
  }

    componentWillMount () {


  		super.componentWillMount();
  		//this.timing("exampleGetUserPack", "GetUserPack", {"UserID":49}, this.showMsg, 6000); //it wont be getpack but that's just an example, also pkg is wrong
  		Actions.refresh({key: 'drawer', open: false });
      this._value = 0;
      this.state.pressAction.addListener((v) => this._value = v.value);
      let AHC = this;
      let packEx = this.returnUserID().then(function(result){
        console.log(result);
        let packId = ({"UserID":result});
        AHC.authorizedHowlCall("AddEditUserHomeAddress", packId, AHC.getUserStuff);
        });

        navigator.geolocation.getCurrentPosition(
          (position) => {
            let getLat = position.coords.latitude;
            let getLon = position.coords.longitude;

            getLat.toString();
            getLon.toString();

            let getLat2 = getLat;
            let getLon2 = getLon;

            let getLat3 = '' + getLat2;
            let getLon3 = '' + getLon2;

            console.log(getLat3);

            this.setState({
              latitude: getLat3,
              longitude: getLon3,
              error: null,
            });
          },
          //(error) => this.setState({ error: error.message }),
          //{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );

   console.log(this.state);
   console.log('componentmounting');



  	}

    componentDidUpdate() {
   console.log('update');
}


  	showMsg(x){
  		console.log(x);

  	}
    getUserStuff(x){



      let v_Address1 = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Address1;
      let v_City = x.AddEditUserHomeAddressResult.GetUserHomeAddress.City;
      let v_State = x.AddEditUserHomeAddressResult.GetUserHomeAddress.State;
      let v_Zip = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Zip;
      let v_FirstName = x.AddEditUserHomeAddressResult.User.FirstName;
      let v_LastName = x.AddEditUserHomeAddressResult.User.LastName;
      let v_CancellationCode = x.AddEditUserHomeAddressResult.User.CancellationCode;
      let v_Email = x.AddEditUserHomeAddressResult.User.Email;
      let v_SilenceCode = x.AddEditUserHomeAddressResult.User.SilenceCode;
      let v_UserToken = x.AddEditUserHomeAddressResult.User.UserToken;
      let v_UserID = x.AddEditUserHomeAddressResult.User.ID;

      this.setState({"u_Address1":v_Address1});
      this.setState({"u_City":v_City});
      this.setState({"u_State":v_State});
      this.setState({"u_Zip":v_Zip});
      this.setState({"u_FirstName":v_FirstName});
      this.setState({"u_LastName":v_LastName});
      this.setState({"u_CancellationCode":v_CancellationCode});
      this.setState({"u_Email":v_Email});
      this.setState({"u_SilenceCode":v_SilenceCode});
      this.setState({"u_UserToken":v_UserToken});
      this.setState({"userid" : v_UserID});

      AsyncStorage.setItem('a_firstname', v_FirstName );
      AsyncStorage.setItem('a_lastname', v_LastName );


      /*

      AsyncStorage.setItem('a_address1', v_Address1 );
      AsyncStorage.setItem('a_city', v_City );
      AsyncStorage.setItem('a_state', v_State );
      AsyncStorage.setItem('a_zip', v_Zip );
      AsyncStorage.setItem('a_firstname', v_FirstName );
      AsyncStorage.setItem('a_lastname', v_LastName );
      AsyncStorage.setItem('a_cancellationcode', v_CancellationCode );
      AsyncStorage.setItem('a_email', v_Email );
      AsyncStorage.setItem('a_silencecode', v_SilenceCode );
      AsyncStorage.setItem('a_usertoken', v_UserToken );
      AsyncStorage.setItem('a_userid', v_UserID );

      var a = AsyncStorage.getItem('a_address1');
      var b = AsyncStorage.getItem('a_city');
      var c = AsyncStorage.getItem('a_state');
      var d = AsyncStorage.getItem('a_zip');
      var e = AsyncStorage.getItem('a_firstname');
      var f = AsyncStorage.getItem('a_lastname');
      var g = AsyncStorage.getItem('a_cancellationcode');
      var h = AsyncStorage.getItem('a_email');
      var i = AsyncStorage.getItem('a_silencecode');
      var j = AsyncStorage.getItem('a_usertoken')
      var k = AsyncStorage.getItem('a_userid');

      //var p = AsyncStorage.getItem('HOWL_ID');*/

      //console.log(p);

    /*  console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      console.log(e);
      console.log(f);
      console.log(g);
      console.log(h);
      console.log(i);
      console.log(j);
      console.log(k);*/

      console.log(x);
      console.log(x.AddEditUserHomeAddressResult.GetUserHomeAddress.UserID);
      console.log(x.AddEditUserHomeAddressResult.GetUserHomeAddress.Address1);
      console.log(x.AddEditUserHomeAddressResult.GetUserHomeAddress.City);
      console.log(x.AddEditUserHomeAddressResult.GetUserHomeAddress.State);
      console.log(x.AddEditUserHomeAddressResult.GetUserHomeAddress.Zip);
      console.log(x.AddEditUserHomeAddressResult.User.FirstName);
      console.log(x.AddEditUserHomeAddressResult.User.LastName);
      console.log(x.AddEditUserHomeAddressResult.User.CancellationCode);
      console.log(x.AddEditUserHomeAddressResult.User.Email);
      console.log(x.AddEditUserHomeAddressResult.User.SilenceCode);
      console.log(x.AddEditUserHomeAddressResult.User.UserToken);

      console.log(this.state);


    }

    makeAlertCall(){

      let u_userID = this.state.userid;
      let u_Latitude = this.state.latitude;
      let u_Longitude = this.state.longitude;
      let u_Emergency = this.state.emergencytype;

      let e_userObject = {
        'UserID':u_userID,
        'Latitude':u_Latitude,
        'Longitude':u_Longitude,
        'EmergancyType':'1'
      }

      console.log(e_userObject);

        this.authorizedHowlCall("TriggerEmergencyAlert", e_userObject, this.afterAlert);


      let alertObject = {

      }
    }

    afterAlert(x){
      console.log(x);
      Actions.packAlarm();

    }


  handlePressIn () {

    Animated.timing(this.state.pressAction, {
         duration: ACTION_TIMER,
         toValue: 1
      }).start(this.animationActionComplete);

      console.log(this.state);
      console.log(this.props);
      console.log(this.state.credentials);

      this.setState({
          showCancel: true,
          showHome: false,
          opacity:0,
          fill:100
      });
  };


  handlePressOut () {
    Animated.timing(this.state.pressAction, {
        duration: this._value * ACTION_TIMER,
        toValue: 0
    }).start();
    console.log(this.state);
    console.log(this.props);
    this.setState({
        showCancel: false,
        showHome: true,
        opacity: 1,
        latitude: null,
        longitude: null,
        error: null,
    });
  }

  animationActionComplete () {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      //(error) => this.setState({ error: error.message }),
      //{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );



      var message = '';
      if (this._value === 1) {
          message = '';
          //Actions.packAlarm();

      }
      this.setState({
          textComplete: message
      });

  }

  getButtonWidthLayout (e) {
    this.setState({

    });
  }

  oncompleteAnimation(e){
    console.log('yoioiuij');



    console.log(this.state);

  }




    showProps(){
      console.log(this.props);
    }

    showProgress() {

      if (this.state.showCancel) {
                 return (
                   <AnimatedCircularProgress
                   size={240}
                   width={10}
                   fill={this.state.fill}
                   style={styles.circleStyle}
                   rotation={0}
                   tintColor="#0491ce"
                   backgroundColor="#c8c8c8"
                   backgroundWidth={10}
                   onAnimationComplete={() => Actions.packAlarm()}

                   >
                   {
                     (fill) => (
                       <Text style={styles.points}>
                       { Math.round(MAX_POINTS * fill / 100) }
                       </Text>
                     )
                   }


                    </AnimatedCircularProgress>


                 );
             } else {
                 return null;
             }

    }

    showHome() {
      if (this.state.showHome) {
       return (

         <Card>
           <CardSection >
             <TouchableOpacity style={styles.homeButton} onPress={() => Actions.cameraMain()}>
               <View><Text style={styles.homeText}>CAMERA</Text></View>
               <View><Image style={styles.cameraStyle} source={require('../assets/images/camera.png')} /></View>
             </TouchableOpacity>
           </CardSection>

           <CardSection>
             <TouchableOpacity style={styles.homeButton} onPress={() => Actions.devicesMain()}>
               <View><Text style={styles.homeText}>DEVICES</Text></View>
               <View><Image style={styles.cameraStyle} source={require('../assets/images/device.png')} /></View>
             </TouchableOpacity>
           </CardSection>

           <CardSection>
             <TouchableOpacity style={styles.homeButton} onPress={() => Actions.mypackMain()}>
               <View><Text style={styles.homeText}>MY PACK</Text></View>
               <View><Image style={styles.cameraStyle} source={require('../assets/images/pack.png')} /></View>
             </TouchableOpacity>
           </CardSection>

           <CardSection>
             <TouchableOpacity style={styles.homeButton} onPress={() => Actions.monitoringMain()}>
               <View><Text style={styles.homeText}>MONITORING</Text></View>
               <View><Image style={styles.cameraStyle} source={require('../assets/images/monitor.png')} /></View>
             </TouchableOpacity>
           </CardSection>

           <CardSection style={{alignSelf:'center', justifyContent:'center'}}>
             <View style={{alignSelf:'center', justifyContent:'center'}}>

             </View>
           </CardSection>
         </Card>
       )
     }
    }

  render () {

    const fill = this.state.points / MAX_POINTS * 100;




    return (
      <ScrollView style={{borderColor:'#fff', paddingTop:65}}>

        <Text

        value={this.state.firstname}
        style={styles.welcomeText}>Welcome back, {this.state.u_FirstName}</Text>

        <View style={{alignItems: 'center'}} >

        {this.showProgress()}

        </View>

        {this.showHome()}

        <View style={styles.bigButtons} >

        <View style={{alignItems: 'center', marginTop:5}} >
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn }

          onPressOut={this.handlePressOut}>
            <View>
                <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/alertAmbulanceOff.png')} />
            </View>
        </TouchableWithoutFeedback>
        </View>

        <View style={{alignItems: 'center', marginTop:30}} >
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn }
          //onPressIn={() => Actions.packAlarm()}
          onPressOut={this.handlePressOut}
          >
            <View>
                <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/callPack.png')} />
            </View>
        </TouchableWithoutFeedback>
        </View>

        <View style={styles.policeStyle} >
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn }
          onPressOut={this.handlePressOut}>
            <View>
                <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/alertPoliceOff.png')} />
            </View>
        </TouchableWithoutFeedback>
        </View>

        <View style={styles.fireStyle} >
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn }
          onPressOut={this.handlePressOut}>
            <View>
                <Image style={[styles.callPack, {opacity: this.state.opacity}]} source={require('../assets/images/alertFireOff.png')} />
            </View>
        </TouchableWithoutFeedback>
        </View>

        </View>


<Text style={styles.tapStyle}>TAP & HOLD FOR 3 SECONDS TO SOUND ALARM</Text>



      </ScrollView>
    );
  }
}

const styles = {
  packStyle:{
    width:40,
    height:40,
  },
  tapStyle:{
    textAlign:'center',
    color:'#000',
    marginTop:10
  },
  welcomeText:{
    fontSize:18,
    color:'#333',
    fontWeight:'800',
    textAlign:'center'
  },
  circleStyle:{
    marginTop:90
  },
  deviceStyle:{
    width:40,
    height:40,
  },
  monitorStyle:{
    width:40,
    height:40,
  },
  cameraStyle:{
    width:45,
    height:40
  },
  callPack:{
    width:110,
    height:110
  },
  callStyle:{
    width:300,
    height:300,
    alignSelf:'center',
    justifyContent:'center',
    marginTop:10
  },
  homeButton:{
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#dadada',
    marginLeft: 5,
    marginRight: 5,
    overflow:'hidden',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5
  },
  homeText:{
    color: '#054068',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    paddingLeft: 20
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111'
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111'
  },
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 72,
    left: 60,
    width: 90,
    textAlign: 'center',
    color: '#000000',
    fontSize: 50,
    fontWeight: "100"
  },
  policeStyle:{
    position:'absolute',
    left:30,
    top:75
  },
  fireStyle:{
    position:'absolute',
    right:30,
    top:75
  },
  bigButtons:{
    position:'relative'
  }
}


const mapStateToProps = ({ setting }) => {
  const { firstname, lastname, emailaddress, phonenumber } = setting;

  return { firstname, lastname, emailaddress, phonenumber };
};

export default connect(mapStateToProps, {
   editFirstName, editLastName, editEmail, editPhone
 })(HomeScreen);
