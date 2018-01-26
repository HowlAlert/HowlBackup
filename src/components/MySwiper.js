import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Actions
} from 'react-native';

import Swiper from 'react-native-swiper';


export default class MySwiper extends Component {


  render () {

    const resizeMode = 'center';

    return (

            <Swiper
              showsButtons={false}
              paginationStyle={styles.buttonStyle}
              loop={false}
              style={styles.wrapper}
              indexChanged={() => Actions.cameraMain()}

              >

                <View style={styles.slide1}>
                  <Image style={styles.imageStyle} source={require('../assets/images/swiperHome.png')} />
                  <Text style={styles.text}>MONITOR YOUR HOME</Text>
                  <Text style={styles.text2}>HOWL integrates with our motion sensor HOWL camera to notify you of any movement when
                  you are away from home. The HOWL camera also sends audio and video to our HOWL
                  cloud when an alert is sounded to be reviewed by the user</Text>
                </View>
                <View style={styles.slide2}>
                  <Image style={styles.imageStyle} source={require('../assets/images/swiperBell.png')} />
                  <Text style={styles.text}>ALERTS</Text>
                  <Text style={styles.text2}>Howl duress codes include
                   "Alert Police, Alert Fire, Alert Ambulence, Alert Pack," depending upon the type
                    of emergency. All alerts will also alert Pack by default.</Text>
                </View>
                <View style={styles.slide3}>
                  <Image style={styles.imageStyle} source={require('../assets/images/swiperMic.png')} />
                  <Text style={styles.text}>VOICE ACTIVATION</Text>
                  <Text style={styles.text2}>Howl duress codes include
                   "Alert Police, Alert Fire, Alert Ambulence, Alert Pack," depending upon the type
                    of emergency. All alerts will also alert Pack by default.</Text>
                </View>

              </Swiper>

            );
          }
        }

const styles = {
  wrapper: {
    marginTop:0,
    paddingTop:0
  },
  imageStyle:{
    width:180,
    height:180,
    marginBottom:20
  },
  slide1: {

    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop:40,

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
    paddingVertical: 0,
    marginTop:0
  }
}
