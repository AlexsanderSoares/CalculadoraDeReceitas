import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, TouchableHighlight } from 'react-native';

export default class NovaReceita extends Component{

	static navigationOptions = {
		title: "Nova receita",
		headerStyle:{
	        backgroundColor: '#de9f11',
	    },
	};

	constructor(props){
		super(props);

		this.state = {
			text: '',
			ingerdientes: [],
		};
	}

	render(){

		return(
			<View style={styles.container}>
				<View style={styles.center}>

					<Text>{this.state.text}</Text>
				</View>
				<View style={styles.bottom}>
					<View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
						<TextInput onChangeText={(text) => {this.setState(text)}} value={this.state.text} style={styles.input}/>
						<TouchableHighlight style={styles.button} onPress={() => Alert.alert("Teste", "Teste")} underlayColor="transparent">
							<Text style={{color: '#000'}}>Adicionar</Text>
						</TouchableHighlight>
					</View>
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
	input: {
		borderRadius: 10,
		width: 240,
		height: 40,
		borderWidth: 1,
		borderColor: '#000',
		marginRight: 5,
		padding: 10,
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
		marginBottom: 10,
		marginRight: 10,
		marginLeft: 10,
		alignItems: 'center',
	},  
	button: {
		width: 100,
		height: 40,
		padding: 10,
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#de9f11',
	},
});