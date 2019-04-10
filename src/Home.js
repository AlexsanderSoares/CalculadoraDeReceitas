

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, Alert} from 'react-native';


export default class Home extends Component {

  static navigationOptions = {
      title: 'Receitas',
      headerStyle:{
        backgroundColor: '#de9f11',
      },
  };

  constructor(props){

    super(props);

    this.state = {
        receitas: [
        {
          'id': 'rfjdfjfsfsdf',
          'nomeDaRedeita': 'Bolo de cenoura',
        }
        ],
    };

  }

  _keyExtractor = (item, index) => item.id;


  _selectReceita = () => {

      Alert.alert("Teste", "Apenas um teste... Por enquanto.");

  }


  _rederItem = ({item}) => (
      <TouchableHighlight onPress={this._selectReceita} underlayColor="transparent">
          <View style={styles.listItem}>
              <Text style={{color: '#000'}}>{item.nomeDaRedeita}</Text>
          </View>
      </TouchableHighlight>
  );


  render() {
    return (
      <View style={styles.container}>
          {this.state.receitas.length > 0 ? 
            <FlatList
              style={styles.list}
              data={this.state.receitas}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._rederItem}
          /> :

          <View style={styles.center}>
            <Text>Nenhuma receita até o momento</Text>
          </View>
        }
        <View style={styles.bottom}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("NovaReceita")} underlayColor="transparent">
                <View style={styles.botao}>
                  <Text style={{color: '#000'}}>Nova receita</Text>
                </View>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeef',
  },
  list: {
     marginTop: 10,
     marginLeft: 10, 
     marginRight: 10, 
  },
  listItem: {
      backgroundColor: '#ddd',
      padding: 15,
      height: 50,
      marginBottom: 5,
  },
  bottom:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  }, 
  center:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
  }, 
  botao: {
    height: 50,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#de9f11',
  },
});
