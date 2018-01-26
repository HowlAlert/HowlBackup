import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton } from './common';
import Swipeable from 'react-native-swipeable';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';
import Spinner from 'react-native-loading-spinner-overlay';
import ImageLoad from 'react-native-image-placeholder';



class GetAlerts extends AuthorizedHowlComponent {


  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });


    let AHC = this;
    let packEx = this.returnUserID().then(function(result){
      console.log(result);
      let packId = (
        {"UserID":result,
        "PageNumber":"1"
        }

      );
      AHC.authorizedHowlCall("GetUserFeed", packId, AHC.endLoading);
      });


  }

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
       isLoading: true,
       averageback:'',
       totalpounds:'',
       totalpoundsback:'',
       firstname:'',
       lastname:''
     };
     this.endLoading = this.endLoading.bind(this);
     this.endImageLoading = this.endImageLoading.bind(this);
     this.getItem = this.getItem.bind(this)

  }

  async returnFirstName(){
      return this.returnAsync('a_firstname');
  }
  async returnLastName(){
      return this.returnAsync('a_lastname');
  }



  getItem (packmember_n, packmember_p, packmember_e) {
  //  Alert.alert(packmember_name);
  AsyncStorage.setItem('pack_name', packmember_n);
  AsyncStorage.setItem('pack_phone', packmember_p );
  AsyncStorage.setItem('pack_email', packmember_e);


  var packName = AsyncStorage.getItem('pack_name');
  var packPhone = AsyncStorage.getItem('pack_phone');
  var packEmail = AsyncStorage.getItem('pack_email');

  console.log(packName);
  console.log(packPhone);
  console.log(packEmail);

  Actions.addpackMember();
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

  endImageLoading(x){
    console.log(x);
    console.log('do it');
  }



  endLoading(x){
    console.log(x);

    console.log(x.GetUserFeedResult.getUserFeeds[0].ImageURL);

    let AHC = this;
    let testURL = x.GetUserFeedResult.getUserFeeds[0].ImageURL;
    //let GMP = this;
    let testImage = {
      'url': testURL
    }

    AHC.callHowl("GetImageData", testImage, AHC.endImageLoading);
  //let alertDay = x.GetUserPackResult.AvgResTimeOfPoundBack;
    //let alertText = x.GetUserPackResult.TotalMyPound;
    //let alertImage = x.GetUserPackResult.TotalPoundBack;

    //let ayo = this.convertMillisecond(avgBack);
    //console.log(ayo);

    //this.setState({averageback : ayo});
    //this.setState({totalpounds : totalPound});
    //this.setState({totalpoundsback : poundBack});



    //let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //this.setState({
      //isLoading: false,
       //dataSource: ds.cloneWithRows(x.GetUserFeedResult.getUserFeeds)
     //});

     //console.log(this.state);
  }



ListViewItemSeparator = () => {
  return (
    <View
      style={{

        height: .5,
        width: "100%",
        backgroundColor: "#999",

      }}
    />
  );
}


render() {

let getMe = require('../assets/images/camera.png');

  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 65}}>
        <Spinner overlayColor={"rgba(6, 62, 91, 1)"} animation={'fade'} visible={true} textContent={"Loading..."} size={'large'} color={'#fff'} textStyle={{color: '#fff'}} />
      </View>
    );
  }

  return (

    <View style={styles.MainContainer}>

      <View>
      </View>

      <View>
      </View>



      <ListView
        dataSource={this.state.dataSource}
        renderSeparator= {this.ListViewItemSeparator}
        renderRow={(rowData) =>
       <View style={{flex:1, flexDirection: 'column'}} >

         <TouchableOpacity style={styles.containerStyle} >
         <View style={styles.imageContainer}>
         <ImageLoad
          style={styles.imageStyle}
          source={{ uri: rowData.ImageURL }}
  />

         </View>
         <View style={styles.textContainer}>

         <Text style={styles.textHeader} >{rowData.DateCreated }</Text>
         <Text style={styles.textViewContainer} >{rowData.Text}</Text>

         </View>

         </TouchableOpacity>

       </View>

        }
      />

    </View>
  );
}
}

const styles = {
  topContainer:{
    paddingTop:10,
    paddingBottom:10,
    marginBottom:0
  },
  nameText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'800',
    color:'#1f325b'
  },
  packText:{
    textAlign:'center',
    fontSize:11
  },
  packText2:{
    textAlign:'center',
    fontSize:18,
    color:'#1f325b',
    fontWeight:'800'

  },
  packInner:{
    flex:3,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10

  },
  packInner2:{
    flex:3,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'#dadada',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10

  },
  packContainer:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#dadada',
    flexDirection:'row',
    marginBottom:10
  },
  MainContainer:{
    paddingTop:65
  },
  textContainer:{
    marginLeft:10
  },
  imageStyle:{
    width:30,
    height:30,
    marginRight:20,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5
  },
  textViewContainer:{
    lineHeight:20

  },
  textHeader:{
    fontSize:18
  },
  containerStyle:{
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10,
    alignItems:'flex-start',
    flexDirection:'row'
  },
  deleteStyle:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  rightSwipeItem:{
    backgroundColor:'#e4322b',
    paddingTop:30,
    paddingBottom:30,
    paddingLeft:10
  },
  bodyText:{
    fontSize:15,
    color:'#6d6e70'
  },
  headerText:{
    fontSize:18,
    color:'#000000'
  },
  container:{
    paddingTop:65
  },
  listItem: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:8
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 60,
    width: 60,
    marginRight:25
  },
  viewStyle:{
    paddingTop:65,

},
cardStyle:{
  padding: 12,
  flexDirection: 'row',
  alignItems: 'center',
},
  listStyle:{
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',

  },
  imageStyle:{
    width:80,
    height:80,
    alignSelf:'flex-start',
  },
  textStyle:{
    alignSelf:'center',
    position:'absolute',
    left:30,
    top:0
  },
  smallBlue:{
    width:60,
    height:60,

  },
  poundButton:{
    alignSelf:'flex-end',
    position:'absolute',
    right:10,
    top:13
  },
  mainPound:{
    alignSelf:'center'
  },
  bigBlue:{
    width:100,
    height:100
  }
}

export default GetAlerts;
