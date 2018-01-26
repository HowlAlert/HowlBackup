import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import * as Keychain from 'react-native-keychain';
import { AsyncStorage, Alert, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


class HowlComponent extends React.Component{
	//static url = "http://sandbox.howlalarm.com/HOWL_WCF_Sandbox/Service1.svc/";
	async loginUser(credentials){
    console.log('logging in');
		return this.loginBase(credentials, "Login");
	}
	async loginFacebook(credentials){
		return loginBase("","");
	}
	async loginGoogle(credentials){
		//finish
		return this.loginBase("","");
	}
	async callHowl(svc, bodyPkg){
		 const response = await fetch("http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/"+svc, {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(bodyPkg),
		});
		const json = await response.json();
		return json
	}
	async loginBase(credentials, svc){
    console.log('loginbase');
		let bodyPkg = {
			"Email": credentials.username,
			"Password": credentials.password,
		};
		const response = await this.callHowl(svc, bodyPkg);
    console.log(response);


    if(response.LoginResult.ResultStatus.Status == "0"){
      //console.log(response.LoginResult.ResultStatus);
			console.log('not working brahhhhhh');

			Alert.alert('Incorrect Username or Password');

			await AsyncStorage.setItem('HOWL_INVALID', response.LoginResult.ResultStatus.Status);

			return response.LoginResult.ResultStatus.Status.StatusMessage;

    }
		try {
				await AsyncStorage.setItem('HOWL_WCF_JWT', response.LoginResult.GetUser.UserToken);
				await AsyncStorage.setItem("HOWL_ID", response.LoginResult.GetUser.ID);

				await AsyncStorage.setItem('HOWL_INVALID', response.LoginResult.ResultStatus.Status)


        console.log(response);


		} catch (error) {
				// Error saving data
		}
		Keychain
			.setGenericPassword(credentials.username, credentials.password)
			.then(function() {
				//return responseData;
				Actions.drawer();
			});
	}

	async returnTokenFromLogin(){

			return this.returnAsync('HOWL_WCF_JWT');

	}
	async returnUserID(){
			return this.returnAsync('HOWL_ID');
			//return await AsyncStorage.getItem("HOWL_ID")

	}
	async returnAsync(name){
		try {
			const value = await AsyncStorage.getItem(name);
			if (value !== null){
				//console.log(value);
				return value;
			}
		} catch (error) {
		  // Error retrieving data
		  console.log(error);
		}
	}
}
export default HowlComponent;
