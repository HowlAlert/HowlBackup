import React from 'react';
import { Scene, Router, Actions, ActionConst, Drawer, TouchableHighlight } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import HomeScreen from './components/HomeScreen';
import CameraMain from './components/CameraMain';
import DevicesMain from './components/DevicesMain';
import MyPackMain from './components/MyPackMain';
import MonitoringMain from './components/MonitoringMain';
import AddDevices from './components/AddDevices';
import LandingScreen from './components/LandingScreen';
import AddPackMember from './components/AddPackMember';
import NavigationDrawer from './components/NavigationDrawer';
import SwiperContainer from './components/SwiperContainer';
import PackAlarm from './components/PackAlarm';
import SettingsMain from './components/SettingsMain';
import ForgotPassword from './components/ForgotPassword';
import EnterCancel from './components/EnterCancel';
import GetAlerts from './components/GetAlerts';

import EditProfile from './components/settings/EditProfile';
import Notifications from './components/settings/Notifications';
import ChangeAddress from './components/settings/ChangeAddress';
import ChangeCancel from './components/settings/ChangeCancel';
import ChangeCancelNew from './components/settings/ChangeCancelNew';
import ChangeSilent from './components/settings/ChangeSilent';
import PrintCode from './components/settings/PrintCode';
import TermsConditions from './components/settings/TermsConditions';
import PrivacyPolicy from './components/settings/PrivacyPolicy';


import { CreateName, CreateEmail, CreatePass, VerifyPhone, CreateCode, CreateFakeCode, HomeAddress, EnterCode, VoiceWarning } from './components/signup';


import Icon from 'react-native-vector-icons/Ionicons';

const RouterComponent = () => {

  return (

    <Router sceneStyle={{  }}>

    <Scene key="auth">

        <Scene key="landingScreen"
          component={LandingScreen}
          hideNavBar={true}
        />

        <Scene key="mySwiper"
          component={SwiperContainer}
          title=""
          leftTitle="Back"
          onLeft={() => Actions.landingScreen()}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="forgotPassword"
          component={ForgotPassword}
          navTransparent='true'
          hideNavBar={false}
          onLeft={() => Actions.pop()}
          navigationBarStyle={{backgroundColor: 'white'}}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createName"
          component={CreateName}
          navTransparent='true'
          hideNavBar={false}
          onLeft={() => Actions.pop()}
          navigationBarStyle={{backgroundColor: 'white'}}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createEmail"
          component={CreateEmail}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          onLeft={() => Actions.pop()}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createPass"
          component={CreatePass}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="verifyPhone"
          component={VerifyPhone}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="enterCode"
          component={EnterCode}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="homeAddress"
          component={HomeAddress}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createCode"
          component={CreateCode}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createFakeCode"
          component={CreateFakeCode}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="voiceWarning"
          component={VoiceWarning}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="login"
          component={LoginForm}
          title=""
          hideNavBar={false}
          leftTitle="Back"
          rightTitle="Next"
          onLeft={() => Actions.landingScreen()}
          navigationBarStyle={{backgroundColor: 'white'}}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          // navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

      </Scene>

    <Scene key="drawer"
      type={ActionConst.RESET}
      component={NavigationDrawer}
      open={false} >

    <Scene key="main" initial>

      <Scene key="homeScreen"
        component={HomeScreen}
        title="HOWL"
        navTransparent='true'
        initial
        navigationBarStyle={{backgroundColor: 'white'}}
        hideNavBar={false}
        navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarTitleImageStyle={[STYLES.navStyle]}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="employeeList"
        component={EmployeeList}
        title="Employees"
        rightButtonImage={require('./assets/images/plus.png')}
        onRight={() => Actions.employeeCreate()}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="cameraMain"
        drawer={true}
        component={CameraMain}
        title="CAMERAS"
        titleStyle={[STYLES.navTitle]}
        rightButtonImage={require('./assets/images/plus.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        onRight={() => Actions.employeeCreate()}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="devicesMain"
        component={DevicesMain}
        title="DEVICES"
        titleStyle={[STYLES.navTitle]}
        rightButtonImage={require('./assets/images/plus.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        onRight={() => Actions.addDevices()}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="addDevices"
        component={AddDevices}
        title="SELECT DEVICES"
        titleStyle={[STYLES.navTitle]}
        leftButtonTextStyle={[STYLES.leftButtonStyle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="mypackMain"
        component={MyPackMain}
        title="MANAGE PACK"
        titleStyle={[STYLES.navTitle]}
        rightButtonImage={require('./assets/images/plus.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        onRight={() => Actions.addpackMember()}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="monitoringMain"
        component={MonitoringMain}
        title="MONITORING"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene
        key="employeeCreate"
        component={EmployeeCreate}
        title="Add Pack Member"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene
        key="addpackMember"
        component={AddPackMember}
        title="ADD/EDIT PACK MEMBER"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene
        key="packAlarm"
        component={PackAlarm}
        title="PACK ALARM"
        hideNavBar={false}
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="settingsMain"
        component={SettingsMain}
        title="SETTINGS"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeAddress"
        component={ChangeAddress}
        title="CHANGE ADDRESS"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeCancel"
        component={ChangeCancel}
        title="CANCEL CODE"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeCancelNew"
        component={ChangeCancelNew}
        title="ENTER A NEW CODE"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        onLeft={() => Actions.settingsMain()}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeSilent"
        component={ChangeSilent}
        title="CHANGE SILENT CODE"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="termsConditions"
        component={TermsConditions}
        title="TERMS AND CONDITIONS"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="privacyPolicy"
        component={PrivacyPolicy}
        title="PRIVACY POLICY"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />


      <Scene key="editProfile"
        component={EditProfile}
        title="EDIT PROFILE"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />


      <Scene key="getNotifications"
        component={Notifications}
        title="NOTIFICATIONS"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="getAlerts"
        component={GetAlerts}
        title="ALERTS"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="printCode"
        component={PrintCode}
        title="Print Code"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="enterCancel"
        component={EnterCancel}
        hideNavBar={true}
        title="ENTER CANCEL CODE"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

    </Scene>
    </Scene>

    </Router>
  );
};

const STYLES = {

  navStyle: {
    width: 40,
    height: 40
  },
  navTitle:{
    color: '#054068',
    borderColor:'#fff',
    shadowRadius: 0,
    elevation: 0,
    fontWeight:'800'
  },
  leftButtonStyle:{
    color: '#054068'
  }

}

export default RouterComponent;
