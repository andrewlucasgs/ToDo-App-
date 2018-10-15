import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import store from './src/Store'

class ToDoApp extends Component {
    render(){
            <View style={styles.container}>
                <Text> ToDo App</Text>
                <Text> 1- learn redux.</Text>
                <Text> 2- finish this app.</Text>
            </View>
        );
    }
}

export default ToDoApp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
