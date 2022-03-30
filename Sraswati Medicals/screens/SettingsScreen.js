import React,{Component}from "react";
import {Image,ImageBackground,View,Text,Alert,KeyboardAvoidingView,TextInput,TouchableOpacity,StyleSheet}from "react-native"
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/MyHeader'
import { Avatar } from 'react-native-elements';


export default class SettingScreen extends Component{
  constructor(){
    super()
    this.state={
      emailId:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      docId:'',
    }
  }
  getUserDetails(){
    var user = firebase.auth().currentUser;
    var email = user.email

    db.collection("users").where("email_id","==",email).get().then(snapshot=>{
      snapshot.forEach(doc=>{
var data = doc.data()
this.setState({
  emailId:data.email_id,
  firstName:data.first_name,
  lastName:data.last_name,
  address:data.address,
  contact:data.contact,
  docId:doc.id,
})
  })
    })
  }
  updateUserDetails=()=>{
    db.collection("users").doc(this.state.docId).update({
      "first_name":this.state.firstName,
      "last_name":this.state.lastName,
      "address":this.state.address,
      "contact":this.state.contact,
    })
    Alert.alert("Your profile has been updated succesfully")
  }

  componentDidMount(){
    this.getUserDetails
  }
  render(){
    return(
      <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={require("../assets/pro1.jpeg") }
      >
        <View style={styles.headerColumn}>
          <Image
            style={styles.userImage}
            source={require("../assets/profile.png")}
          />
          <Text style={styles.userNameText}>"dew"</Text>
          <View style={styles.userAddressRow}>
            <View>
              <Icon
                name="place"
                underlayColor="transparent"
                iconStyle={styles.placeIcon}
              //  onPress={this.onPressPlace}
              />
            </View>
            <View style={styles.userCityRow}>
              <Text style={styles.userCityText}>
               rajasthan
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
    )
  }
}

const styles=StyleSheet.create({

  containter:{
    flex:1,
    width:400,
    alignItems:"center",
    justifyContent:"center"
  },
  formContainer:{
    flex:1,
    alignItems:"center",
    width:"100%",
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:"center",
    borderColor:"purple",
    borderRadius:10,
    borderWidth:1.5,
    marginTop:20,
    padding:10,
  },

  button:{
    width:"75%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    backgroundColor:"blue",
    marginTop:250,
     
  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
    color:"white",
  },
  text:{
    fontSize: 22,
    marginLeft:15,
    marginTop:15,
    color:"#59FFF5"
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
     textAlign: 'center',
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
})