import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardAluno() {
 return (
   <View style={styles.container}>
       <View style={styles.studentData}>
            <Text style={styles.name}>Pedro Henrique</Text>
            <Text style={styles.matricula}>000000000</Text>
       </View>
       <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Presença</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderRadius: 15,
        alignItems: 'center'
    },
    studentData: {
        marginLeft: 20
    },
    name: {
        color: '#781e20',
        fontSize: 16,
        fontWeight: 'bold'
    },
    matricula: {
        color: '#ddd',
        fontSize: 14,
        fontWeight: '700'
    },
    button: {
        backgroundColor: '#000',
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        borderRadius: 15
    },
    buttonText: {
        color: '#FFF'
    }
})