import * as React from 'react';
import {StyleSheet, View, Text, Pressable } from 'react-native'
import {useState, useEffect } from 'react';
import Translation from './Translation' 



function Token(props) {
    const [seen, setSeen] = useState(0);
    const [reset, setReset] = useState(0);

    useEffect(() => {
        console.log('clicked a token!')
    });

    return (
        <View style={styles.token}>
            <View>
                <Translation translationText={props.translationText}/>
            </View>
            <View>
                <Text>{props.originalText}</Text>
            </View>
        </View>
    );
}
export default Token

const styles = StyleSheet.create({
    token:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        marginBottom: 10,
        flexDirection: "column",
    },
    pressedItem: {
        opacity: 0.5,
      },
});