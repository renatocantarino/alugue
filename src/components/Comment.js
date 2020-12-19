import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Comment(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{props.Text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
   
   
   
    description: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 20,
        color: '#b3aeae',
        fontSize: 14,
        lineHeight: 16,
        marginTop: 12,
    },
   
});