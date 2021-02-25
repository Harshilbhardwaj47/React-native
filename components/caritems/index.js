import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles'

const Caritem = (props) =>  {
    return (
        <View style={styles.carcontainer}>

    <ImageBackground

     source={require('../../assets/images/ModelX.jpeg')}
     style={styles.image}
     />

    <View style={styles.titles}>
    <Text style={styles.title}>Model S</Text>
    <Text style={styles.subtutle}>Starting at $45,680</Text>
    </View>

    </View>
    );
};

export default Caritem;