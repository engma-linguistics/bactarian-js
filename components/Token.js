import {StyleSheet, View, Text } from 'react-native'

import Translation from './Translation' 

function Token(props) {
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
});