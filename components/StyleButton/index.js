import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Stylebutton = (props) => {
    return(
        <View styles = {styles.container}>
            <Pressable
            style={styles.Button}
            onPress={()=>{
                console.warn('Button workin fine')
            }}
            >
            <Text style = {styles.text}>Custom Order</Text>
            </Pressable>
        </View>

    );
};

export default Stylebutton;