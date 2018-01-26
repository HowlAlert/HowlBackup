import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner, CreateButton } from './common';
import { TextField } from 'react-native-material-textfield';
import { Scene, Router, Actions } from 'react-native-router-flux';

class MonitoringMain extends Component {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
  }

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
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
        MONTHLY PLAN - $5.99
      </CreateButton>
    );
  }

  render() {
    return (
    <View>

      <Image style={styles.logoStyle} source={require('../assets/images/monitorperson.png')} />

      <View style={styles.loginStyle}>

        <Text style={styles.headerText}>
          UNLOCK EVERYTHING
        </Text>
        <Text style={styles.bodyCopy}>
          Subscribe to howl monitoring for only $5.99/month
          ($71.88 annually)) for our authenticated third-party.
          24-hour  monitoring service who will contact the corressponding authorities on your behalf when you send alerts (Police, Ambulance, Fire).
          *All alerts will notify Pack by default</Text>



        </View>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>

          {this.renderButton()}
        </CardSection>

        <Text style={styles.restorePurchase}>Restore Purchase</Text>


      </View>
    );
  }
}

const styles = {
  bodyCopy:{
    alignSelf:'center',
    textAlign:'center',
    color:'#999',
    paddingLeft:30,
    paddingRight:30
  },
  headerText:{
    fontSize:22,
    color:'#333',
    textAlign:'center',
    fontWeight:'bold',
    marginBottom:15

  },
  restorePurchase:{
    textDecorationLine:'underline',
    color:'#999',
    marginTop:15,
    textAlign:'center'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  logoStyle:{
    width:200,
    height:200,
    alignSelf:'center',
    marginBottom:20
  },
  loginStyle:{
    paddingLeft:30,
    paddingRight:30,
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

}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
 })(MonitoringMain);
