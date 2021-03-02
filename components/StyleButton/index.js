import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Stylebutton = (props) => {

const type = props.type;
const content = props.content;
const onPress = props.onPress

const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return(
        <View styles = {styles.container}>
            <Pressable
            style={[styles.Button,{backgroundColor: backgroundColor}]}
            onPress={()=>onPress()}
            >
            <Text style = {[styles.text],{color: textColor}}>{content}</Text>
            </Pressable>
        </View>

    );
};

export default Stylebutton;