import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Login() {
    const [handleLogin, setHandleLogin] = useState(false);
    //const [access, setAccess] = useState(false);

    async function verifyUserAuthentication(){
        if(handleLogin){
            const authentication = await LocalAuthentication.authenticateAsync();
            if (authentication.success){
                navigation.navigate('Home');
                setHandleLogin(false)
            }
        }
    }

    function userHandleLogin() {
        setHandleLogin(true);
        verifyUserAuthentication();
    }

    const navigation = useNavigation();

 return (
    <SafeAreaView style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.contentHeader}>
            <View style={styles.contentLogo}>
                <Image 
                source={require('../../assets/logoLogin.png')}
                style={{ width: '100%', height: 200, marginTop: 25, marginBottom: 25 }}
                resizeMode="contain"
                />
            </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.contentForm}>
            <Text style={styles.message}>Faça seu Login</Text>
            <Text style={styles.title}>Matrícula</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite sua matrícula..."
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput 
            style={styles.input}
            placeholder="Digite sua senha..."
            secureTextEntry={true}
            />

            <TouchableOpacity onPress={userHandleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    contentHeader: {
        marginBottom: '8%',
        paddingStart: '5%',
        backgroundColor: '#781e20',
        paddingBottom: '10%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000'
    },
    contentForm: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 16,
        height: 40,
        marginBottom: 12
    },
    button: {
        backgroundColor: '#781e20',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    contentLogo: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})