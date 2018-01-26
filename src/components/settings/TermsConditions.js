import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { Scene, Router, Actions } from 'react-native-router-flux';

class TermsConditions extends Component {


  render() {
    return (
    <ScrollView style={styles.container}>

    <Text style={styles.textStyle}>In efficitur felis nec imperdiet egestas. Nullam ultrices convallis sodales.
    Mauris tincidunt nulla purus, et aliquet nunc eleifend a. Nulla quis massa et ante
    consectetur maximus sed id sem. Sed rutrum rhoncus elit eget convallis. Pellentesque
    tempus nulla id feugiat porta. Curabitur sed egestas dui. Donec faucibus cursus
    Sed id porttitor elit. Suspendisse congue molestie augue, a condimentum enim dignissim
    nec. Morbi in nulla id turpis aliquet dignissim. Mauris nisl enim, tristique vitae
    velit eu, sodales lacinia diam.</Text>

    <Text style={styles.textStyle}>Vivamus quis orci sagittis, tempor purus nec, condimentum sapien. Sed sed
    aliquam eros. Nunc bibendum ex id ex varius semper. Curabitur vulputate ullamcorper
    nisl. Donec mollis nisl nisi, non aliquet leo vulputate at. Nullam gravida lorem
    eget nulla ultrices, sed rutrum augue ornare. Fusce semper nibh ac fermentum finibus.
    Curabitur eu leo eget sapien pulvinar ultrices sed non tellus. Maecenas varius dictum
    arcu, vel laoreet neque elementum gravida.</Text>

    <Text style={styles.textStyle}>Sed et consectetur mi, varius tristique enim. Mauris ac tempus quam, nec molesti
     neque. Nam ultricies ipsum nec leo laoreet suscipit. Fusce et nibh justo. Morbi lobortis
      lectus non tristique dapibus. Donec bibendum laoreet est, vitae vehicula ligula
      efficitur ac. Morbi lobortis risus ut dapibus ultrices. Etiam sit amet
      ullamcorper orci, quis tempor tellus. Mauris neque tellus, aliquet at finibus
      vel, consequat sed est.</Text>

      <Text style={styles.textStyle}>Sed et consectetur mi, varius tristique enim. Mauris ac tempus quam, nec molesti
       neque. Nam ultricies ipsum nec leo laoreet suscipit. Fusce et nibh justo. Morbi lobortis
        lectus non tristique dapibus. Donec bibendum laoreet est, vitae vehicula ligula
        efficitur ac. Morbi lobortis risus ut dapibus ultrices. Etiam sit amet
        ullamcorper orci, quis tempor tellus. Mauris neque tellus, aliquet at finibus
        vel, consequat sed est.</Text>

        <Text style={styles.textStyle}>Sed et consectetur mi, varius tristique enim. Mauris ac tempus quam, nec molesti
         neque. Nam ultricies ipsum nec leo laoreet suscipit. Fusce et nibh justo. Morbi lobortis
          lectus non tristique dapibus. Donec bibendum laoreet est, vitae vehicula ligula
          efficitur ac. Morbi lobortis risus ut dapibus ultrices. Etiam sit amet
          ullamcorper orci, quis tempor tellus. Mauris neque tellus, aliquet at finibus
          vel, consequat sed est.</Text>

          <Text style={styles.textStyle}>Sed et consectetur mi, varius tristique enim. Mauris ac tempus quam, nec molesti
           neque. Nam ultricies ipsum nec leo laoreet suscipit. Fusce et nibh justo. Morbi lobortis
            lectus non tristique dapibus. Donec bibendum laoreet est, vitae vehicula ligula
            efficitur ac. Morbi lobortis risus ut dapibus ultrices. Etiam sit amet
            ullamcorper orci, quis tempor tellus. Mauris neque tellus, aliquet at finibus
            vel, consequat sed est.</Text>

    </ScrollView>
    );
  }
}


const styles = {
  container:{
     flex            : 1,
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
  textStyle: {

    textAlign:'center',
    paddingRight:0,
    paddingLeft:0,
    marginBottom:5,
    marginTop:5
  },
  spinnerStyle:{
    marginTop:40
  }
}



export default TermsConditions;
