import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Disciplina from '../../components/Disciplina';
export default function Home() {


    const navigation = useNavigation();

 return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image 
                source={require('../../assets/logoLogin.png')}
                style={styles.image}
            />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            <Text style={styles.text}>Disciplinas ministradas</Text>

            <View style={styles.containerDisciplina}>
                <Disciplina onPress={() => navigation.navigate('Alunos')} />
                <Disciplina />
                <Disciplina />
                <Disciplina />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#781e20'
    },
    image: {
        width: 200,
        height: 200
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontSize: 26,
        marginHorizontal: 15,
        fontWeight: 'bold'
    },
    scrollView: {
        marginHorizontal: 15,
        marginTop: 30
    },
    containerDisciplina: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})