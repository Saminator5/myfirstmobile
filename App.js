import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ListView } from 'react-native';
import _ from 'underscore';
import {StackNavigator} from 'react-navigation';

class App extends React.Component {
	static navigationOptions = (props) => ({
		title: 'Home Page',
		headerRight: <TouchableOpacity onPress={() => (props.navigation.navigate('Page2'))}><Text>Second Page</Text></TouchableOpacity>
	})

	render() {
		return (
			<View style={styles.container}>
				<Text style={{backgroundColor: 'green'}}> Home Page </Text>
			</View>
		);
	}
}

class Second extends React.Component {
	static navigationOptions = (props) => ({
		title: 'Second Page',
		headerRight: <TouchableOpacity onPress={() => (props.navigation.navigate('Page3'))}><Text>Third Page</Text></TouchableOpacity>
	})

	render() {
		return (
			<View style={styles.container}>
				<Text style={{backgroundColor: 'red'}}> Second Page </Text>
			</View>
		);
	}
}

class Third extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text> Third Page </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40
	},
});

const Navigator = StackNavigator({
	Home: {screen: App},
	Page2: {screen: Second},
	Page3: {screen: Third}
});

export default Navigator;
