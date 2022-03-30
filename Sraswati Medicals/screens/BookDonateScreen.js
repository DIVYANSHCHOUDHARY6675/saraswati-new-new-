import React from 'react';
import { ImageBackground,View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { Header } from 'react-native-elements';


export default class HomeScreen extends React.Component {
  render(){
  return (
   
    
    <View
    
      style={styles.container}>
      <ImageBackground source={require("../assets/abstract.jpeg")} style={{width: '100%', height: '100%'}}>
     
   
      <Text style={styles.head}> Sraswati Medicals </Text>
      
    
    
      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>ORDER NOW!</Text></View>
        <CustomButton
          style={styles.button}
          title="GO"
          onPress={() => {
          //   props.navigation.navigate('Addscreen');
          }}
        />
      
      </Card>


      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Calculate your journey fuel cost here</Text></View>
        <CustomButton
          style={styles.button}
          title="Calculate"
          onPress={() => {
    props.navigation.navigate('FuelCalculator');
          }}
        />
        
      </Card>


   
    </ImageBackground>

   
    </View>
  );
}
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor:'#ff00ff',
    
  },
  homeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
    marginHorizontal: 15
  },
  text: {
    fontSize: 22
  },
  button: {
    marginVertical:20,
  },
  background: {
    position: 'absolute',
  
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
  head:{
    color:'#FE5858', 
     fontSize:45,
     fontWeight:"normal", 
     backgroundColor: "#000000a0",
     marginTop: 1,
     height: 65
     
  },
  

  
});


