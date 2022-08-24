import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import {useNavigation} from '@react-navigation/core'
import React, {useEffect, useState}  from "react";
import  { auth } from '../../../firebase-config'
import { FlatList } from "react-native-gesture-handler";


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')

  const navigation = useNavigation()

  const [shouldShow, setshouldShow] = useState(true);

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(user =>{
        if (user){
            navigation.navigate("List")
        }
    })
    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        setshouldShow(!shouldShow);
       
      })
      .catch(error => alert(error.message))
  }

  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("List")
        setshouldShow(!shouldShow);
      })
        .catch(error => alert(error.message))
  }
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.account}>Account</Text>
      {
        shouldShow ? (
                <View style={styles.inputContainer}>
      
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        
      </View>
        ): <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Email : {auth.currentUser.email}</Text>
          <Text style={styles.infoText}>Password: {password}</Text>
          <Text style={styles.infoText}>Currnet locale: {country}</Text>
          </View>}
          <View style={styles.stick}></View>
          <View style={styles.inputContryContainer}>
           
          <TextInput
          placeholder="Turkey"
          value={country}
          onChangeText={(text) => setCountry(text)}
          style={[styles.pickerinput, styles.countryPicker]}
          
        />
        <Image source={require("../../../assets/Image/Vector.png")} style={[styles.countryPicker,styles.countrySelect]}></Image>
        
          </View>

          
      {        
        shouldShow ? (
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
        
        

      </View>
        ):<View style={styles.buttonOutContainer}>
          <TouchableOpacity onPress={handleSignOut} style={styles.buttonOut}>
          <Text style={[styles.buttonOutText, styles.outButton]}>Log Out</Text>
        </TouchableOpacity>
          </View>}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  stick:{
    height:1,
    borderColor:'#F1F3F5',
    width:'95%',

    borderWidth:0.7,
    borderStyle:'solid',
    margin:20,
  },
  countrySelect:{
    marginTop:50,
    bordorBottomWidth:0.1,
    
  },
  pickerinput:{

    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderBottomWidth:0.5,
    paddingTop:45.5,
    color:'#64738C',
    width:'95%'

  },
  countryPicker:{    
  },
  inputContryContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  buttonOutContainer:{
    borderColor:'#E82223'
  },
  outButton:{
    backgroundColor: "#ffff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#E82223",
    
  },
  buttonOut:{
    
    borderColor: "#E82223",
    borderWidth: 1,
    borderRadius:12,
    width:327,
    height:56,
    marginTop:214,
    
    
    
  },
  buttonOutText:{
    color: "#E82223",
    textAlign: "center",
    
    
  },
  infoText:{
    position:'relative',
    fontWeight:'500',
    fontSize:14,
    fontStyle:'normal',

  },
  infoContainer:{
    marginTop:115,
    marginRight:135,
    justifyContent:'space-around',
    width:216,
    height:87,

    

  },
  account:{
    width:327,
    height:40,
    fontWeight: '600',
    fontSize:32,
    marginVertical:24,
    marginTop:92,
    


    position:'static'
  },
  accountfocus:{

  },
  container: {
    flex: 1,
    backgroundColor:"white",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderBottomWidth:0.5,
    paddingTop:45.5,
    color:'#64738C',
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    
    marginTop: 37,
    borderColor: "#E82223",
    backgroundColor:'#E82223',
    borderWidth: 2,
  },
 
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
});


