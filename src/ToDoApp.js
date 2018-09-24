import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import store from './src/Store'

class ToDoApp extends Component {
    render(){
t            <View style={styles.container}>
                <Text> ToDo App</Text>
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
  