import React, { Component, useState, props } from "react";
import { Platform, StyleSheet, View, Button, Alert } from "react-native";
import {Picker} from '@react-native-picker/picker';

export default class PickerActivity extends Component {

   

constructor(){
    super();
    this.state={
      PickerSelectedVal : ''
    }
  }

  



render() {
    const {navigations} = props;

    return (
      <View style={styles.container}>
      <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >

           <Picker.Item label="Türkçe" value="Turkish" />
           <Picker.Item label="English" value="English" />
           <Picker.Item label="Russia" value="Russia" />
           <Picker.Item label="Franch" value="Franch" />

         </Picker>

         <Button title="Bölge seçin" onPress={ navigations.navigate('Country',{
            con: PickerSelectedVal
         })} />
      </View>
    );
  }

}



const styles = StyleSheet.create({
    container: {
      
      justifyContent: "center",
     
    },
  });
  
  