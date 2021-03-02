import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles'
import Stylebutton from '../StyleButton'

const Caritem = (props) =>  {

 const {name, tagline, image} = props;

    return (
        <View style={styles.carcontainer}>

    <ImageBackground

     source={image}
     style={styles.image}
     />

    <View style={styles.titles}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.subtutle}>{tagline}</Text>
    </View>
   
   <View styles = {styles.buttoncontainer}>
   <Stylebutton type="primary" 
    content={"CUSTOM ORDER"}
    onPress={() => {
        console.warn("custom order was pressed")
    }}
    />

    <Stylebutton type="secondary" 
    content={"EXISTING INVENTORY"}
    onPress={() => {
        console.warn("existing inventory was pressed")
    }}
    />
   </View>
   

    </View>
    );
};

export default Caritem;