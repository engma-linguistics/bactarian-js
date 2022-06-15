
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Translation(props) {
    return (
        <View>
            <Text style={styles.translation}>{props.translationText}</Text>
        </View>
    );
}

export default Translation

const styles = StyleSheet.create({
    translation:
    {
        fontSize: 10,
        color: 'gray'
    }
});