import * as React from 'react';
import {StyleSheet, View, Text, Pressable } from 'react-native'
import {useState, useEffect } from 'react';
import Translation from './Translation' 
import Pressable from 'react-native';

class WordPair extends React.Component { //I have no idea what I'm doing, is this right at all??? I feel like much of this might be something.
    constructor(props) {
        super(props);
        this.reset = this.handleReset.bind(this);
        this.state = {sourceLanguageText: '', targetLanguageText: '', seenCount: 0, reset: 0}
    }
    handleReset() {
        this.setState({reset: reset++, seenCount: 0});
    }

    render() {
        return (
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={this.reset}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <View style={styles.token}>
                    <View>
                        <Translation translationText={props.translationText}/>
                    </View>
                    <View>
                        <Text>{props.originalText}</Text>
                    </View>
                </View>
            </Pressable>
        
        );
    }
}

export default WordPair


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