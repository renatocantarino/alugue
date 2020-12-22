import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ToastAndroid } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';

import SwiperComponent from '../components/Swipper';
import Comment from '../components/Comment';


export default function Detail() {

    const showToast = (msg) => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.CENTER, 25,
            50);
    };

    function handleAlugar() {
        showToast("Obrigado por alugar esta casa");

    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#FFF' }} >
            <View style={styles.container}>
                <View style={styles.swiperContent}>
                    <SwiperComponent />
                </View>

                <View style={styles.headerContent}>
                    <View style={{ width: '65%' }}>
                        <Text style={styles.house}>Casa de Praia</Text>
                    </View>

                    <View style={{ width: '35%' }}>
                        <Text style={styles.rating}>Avaliações</Text>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Stars
                                default={4}
                                count={5}
                                half={true}
                                starSize={20}
                                fullStar={<Ionicons name="md-star" size={24} style={styles.myStarStyle} />}
                                emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} />}
                                halfStar={<Ionicons name="md-star-half" size={24} style={styles.myStarStyle} />}
                            />
                        </View>
                    </View>
                </View>

                <Text style={styles.price}>
                    R$ 1.200,20
             </Text>
                <Text style={styles.description}>
                    Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.
            </Text>

                <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                    <Text style={[styles.title, { marginTop: 20 }]}>Comentários</Text>
                </View>

                <Comment Text='Otima' />
                <Comment Text='Casa boa' />
                <Comment Text='Perto do centro' />
                <Comment Text='As 3 da manhã, escutamos Choro de criança na sala' />


                <TouchableOpacity
                    onPress={handleAlugar}
                    style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Alugar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'        
    },
    swiperContent: {
        flexDirection: 'row',
        height: 330,
        width: '100%',
    },
    headerContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    house: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 18,
        color: '#4f4a4a'
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 18,
        color: '#4f4a4a'
    },
    rating: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 9,
        color: '#4f4a4a'
    },
    myStarStyle: {
        color: '#E7A74e',
        backgroundColor: 'transparent',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    price: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        color: '#000'
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 20,
        color: '#b3aeae',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 20,
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: 90,
        height: 90,
        borderRadius: 8,
        marginRight: 20,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#0000FF",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 350,
        marginTop: 5,
        alignSelf: "center",
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});