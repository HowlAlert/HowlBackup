import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { BlueButton2 } from './common';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MySwiper from './MySwiper';

const SwiperContainer = () =>{

  const resizeMode = 'center';



  return (
    <View>
      <Image style={styles.imageStyle} source={require('../assets/images/treesfull.png')} >
      <MySwiper />

      
      </Image>
    </View>
  );
};

const styles = {
  imageStyle:{

          width: '100%',
          height: '100%',
          justifyContent: 'center'

  }
}

export default SwiperContainer;
