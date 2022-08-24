import { StyleSheet, Text, View, Image } from "react-native";
import React, { porps, Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.homeScreen}>
        <View style={styles.homeScreen}>
        <View>
        <View style={[styles.col, styles.container]}>
          <View style={styles.image}>
            <Image source={require("../../../assets/Image/Image.png")} />
          </View>
          <View>
            <View style={styles.row}>
              <Text style={styles.textName}>Villa Bosphorus</Text>
              <Text style={styles.textInf}>Lorem İpsum Sit Dolor Met</Text>
            </View>
            <View style={styles.point}>
              <View styles={styles.pointer}>
                <View>
                <Image source={require("../../../assets/Image/Star.png")} />
                </View>
                <View >
                <Text style={styles.starText}>3.9</Text>
                </View>
              </View>
              <View style={styles.area}>
                <Image source={require("../../../assets/Image/MYer.png")} />
                <Text style={styles.areaText}>3.7 km</Text>
              </View>
            </View>
            <View style={styles.point}>
            <Image source={require("../../../assets/Image/KYer.png")} />
                <Text style={styles.sepetText}>SEPETE EKLE</Text>
            </View>
          </View>
        </View>
        </View>
        {/**/}
        <View style={styles.stick}></View>
        <View style={[styles.col, styles.container]}>
          <View style={styles.image}>
            <Image source={require("../../../assets/Image/Image.png")} />
          </View>
          <View>
            <View style={styles.row}>
              <Text style={styles.textName}>Villa Bosphorus</Text>
              <Text style={styles.textInf}>Lorem İpsum Sit Dolor Met</Text>
            </View>
            <View style={styles.point}>
              <View styles={styles.pointer}>
                <View>
                <Image source={require("../../../assets/Image/Star.png")} />
                </View>
                <View >
                <Text style={styles.starText}>3.9</Text>
                </View>
              </View>
              <View style={styles.area}>
                <Image source={require("../../../assets/Image/MYer.png")} />
                <Text style={styles.areaText}>3.7 km</Text>
              </View>
            </View>
            <View style={styles.point}>
            <Image source={require("../../../assets/Image/KYer.png")} />
                <Text style={styles.sepetText}>SEPETE EKLE</Text>
            </View>
          </View>
          
        </View>
        <View style={styles.stick}></View>
{/** */}
<View style={[styles.col, styles.container]}>
          <View style={styles.image}>
            <Image source={require("../../../assets/Image/Image.png")} />
          </View>
          <View>
            <View style={styles.row}>
              <Text style={styles.textName}>Villa Bosphorus</Text>
              <Text style={styles.textInf}>Lorem İpsum Sit Dolor Met</Text>
            </View>
            <View style={styles.point}>
              <View styles={styles.pointer}>
                <View>
                <Image source={require("../../../assets/Image/Star.png")} style={styles.starico}/>
                </View>
                <View >
                <Text style={styles.starText}>3.9</Text>
                </View>
              </View>
              <View style={styles.area}>
                <Image source={require("../../../assets/Image/MYer.png")} />
                <Text style={styles.areaText}>3.7 km</Text>
              </View>
            </View>
            <View style={styles.point}>
            <Image source={require("../../../assets/Image/KYer.png")} />
                <Text style={styles.sepetText}>SEPETE EKLE</Text>
            </View>
          </View>
          
        </View>
        <View style={styles.stick}></View>

        <View style={styles.equalTextArea}>
          <Text style={styles.headerText}>Ürünlerin Toplamı:</Text>
          <View style={styles.equalContainer}>
          <Text style={styles.equal}>
              Toplam: 124,35TL
            </Text>
            <Text style={styles.taxText}>
              Vergiler + Kargo: 21,45TL
            </Text>
            <Text style={styles.fullEqual}>
              Genel Toplam: 145,8TL
            </Text>
          </View>
        </View>


        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
 
  fullEqual:{
    fontSize:18,
    fontWeight:'700',
    marginTop:15,
  },
  taxText:{
    fontSize:14,
    fontWeight:'400',
    marginBottom:10,
  },
  equal:{
    fontSize:14,
    fontWeight:'400',
    marginBottom:10,

  },
  equalContainer:{
    marginTop:16,
    height:'100%',
    marginLeft:'6.4%',
  },
  headerText:{
    fontWeight:'700',
    fontSize:24,

  },
  equalTextArea:{
    margin:24,
    marginTop:39,
  },
  stick:{
    height:1,
    borderColor:'#F1F3F5',
    width:'95%',

    borderWidth:0.7,
    borderStyle:'solid',
    margin:20,
  },
  container:{
    marginLeft:24,
    marginTop:25,
  },
  areaText:{
    fontWeight:'400',
    fontSize:12,
    margin:6
  },
  area:{
    alignItems: 'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
    alignContent:'space-between'
  },
  starText:{
    fontWeight:'400',
    fontSize:12,
    lineHeight:16,
    marginLeft:20,
  },
  pointer:{
 
    flexDirection:"row",
    

  },
  sepetText:{
    color:'#E82223',
    fontWeight:'700',
    fontSize:12,
    
  },
  textInf:{
    fontSize:12,
    fontWeight:'400',
    color:'#64738C',
    marginTop:3,
  },
  textName:{
    marginTop:15,
    fontSize:16,
    fontWeight:'600',
    color:'#121212'
  },
  point:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
    marginTop:13,
  },
  image:{
    margin:20,
  },
  row: { flexDirection: "column" },
  col: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  homeScreen: {
    backgroundColor:'white'
  },
  container: {},
  tinyLogo: {
    marginLeft: 20,
  },
});

export default HomeScreen;
