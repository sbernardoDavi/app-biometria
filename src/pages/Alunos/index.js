import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardAluno from '../../components/CardAluno';

export default function Alunos() {
 return (
   <View style={styles.container}>
     <View style={styles.contentNameDisciplina}>
       <Text style={styles.nameDisciplina}>Laboratório de Desenvolvimento de Aplicativos Híbridos</Text>
     </View>
     <ScrollView style={styles.contentAlunos}>
        <CardAluno />
     </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentNameDisciplina: {
    backgroundColor: '#781e20',
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameDisciplina: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginHorizontal: 60
  },
  contentAlunos: {
    marginHorizontal: 15,
    marginTop: 30
  }
})