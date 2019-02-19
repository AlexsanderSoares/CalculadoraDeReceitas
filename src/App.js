

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, Alert} from 'react-native';


export default class App extends Component {

  constructor(props){

    super(props);

    this.state = {
        receitas: [
            {
              id: '1',
              nomeDaRedeita: 'Teste',
            },
            {
              id: '2',
              nomeDaRedeita: 'Teste 2',
            },
        ],
    };

  }

  _keyExtractor = (item, index) => item.id;


  _selectReceita = () => {

      Alert.alert("Teste", "Apenas um teste... Por enquanto.");

  }


  _rederItem = ({item}) => (
      <TouchableHighlight onPress={this._selectReceita}>
          <View style={styles.listItem}>
              <Text style={{color: '#000'}}>{item.nomeDaRedeita}</Text>
          </View>
      </TouchableHighlight>
  );


  render() {
    return (
      <View style={styles.container}>
          <FlatList
              style={styles.list}
              data={this.state.receitas}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._rederItem}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
     marginTop: 10,
     marginLeft: 10, 
     marginRight: 10, 
  },
  listItem: {
      backgroundColor: '#eee',
      padding: 15,
      height: 50,
      marginBottom: 5,
  }
});
