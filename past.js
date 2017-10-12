import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ListView } from 'react-native';
import _ from 'underscore';
export default class App extends React.Component {
	constructor(){
		super();
		let dataSource = new ListView.DataSource({
			rowHasChanged: (r1, r2) => (r1 !== r2)
		});

		this.state = {
			//appear: 'flex',
			//val: 0,
			data: _.range(10),
			dataSource: dataSource.cloneWithRows(_.range(10)),
		};
	}

	add(){
		let newData = this.state.data.slice();
		newData.push(newData.length);
		this.setState({
			data: newData,
			dataSource: this.state.dataSource.cloneWithRows(newData)
		});
	}

	remove(){
		let newData = this.state.data.slice();
		newData.pop();
		this.setState({
			data: newData,
			dataSource: this.state.dataSource.cloneWithRows(newData)
		})
	}

	// press(item) {
	// 	alert('item: ', item);
	// 	item = parseInt(item);
	// 	alert('item: ', item);
	//
	// 	let newDataOne = this.state.data.slice(0, item);
	// 	let newDataTwo = this.state.data.slice(item + 1);
	// 	let newData = newDataOne.concat(newDataTwo);
	//
	// 	this.setState({
	// 		data: newData,
	// 		dataSource: this.state.dataSource.cloneWithRows(newData),
	// 	});
	// }

	// up() {
	// 	let val = this.state.val + 1;
	// 	console.log('I should increment.', val);
	// 	this.setState({
	// 		val: val
	// 	});
	// }
	//
	// down() {
	// 	let val = this.state.val - 1;
	// 	console.log('I should decrement.', val);
	//
	// 	this.setState({
	// 		val: val
	// 	});
	// }

	// dissapear() {
	// 	console.log('I should dissapear now...');
	// 	this.setState({
	// 		appear: 'none'
	// 	})
	// }



	render() {
		console.log('hello i am in react native.');
		return (

		<View stlye={{flex: 1}}>
		<View style={{alignItems: 'center', marginTop: 20}}>
			<TouchableOpacity onPress={this.add.bind(this)}>
				<Text style={{fontSize:20}}> Add </Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={this.remove.bind(this)}>
				<Text style={{fontSize:20}}> Remove </Text>
			</TouchableOpacity>
		</View>

		<View style={{marginTop: 20}}>
			<ListView
				renderRow={(item) => (
					<View style={{alignItems: 'center'}}>
						<Text style={{fontSize: 20}}>{item}</Text>
					</View>
				)}
				dataSource={this.state.dataSource}
			/>

		</View>
	</View>);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});




// <View style={{flexDirection: 'column', height: 800, padding: 20}}>
// 	<View style={{backgroundColor: 'red', flex: 1}} />
// 	<View style={{backgroundColor: 'blue', flex: 3}} />
// 	<Text>Hello World!</Text>
// </View>
// <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// 	<Text>Hello World!</Text>
// </View>

// alignItems -- vertical
// justifyContent -- horizontal

// <View style={{flex: 1, alignItems: 'center'}}>
// 		<Text style={{fontSize: 70, color: 'blue'}}> Blue! </Text>
//
// 		<Text style={{fontSize: 40, color: 'red'}}> Red! </Text>
// </View>
// <View style={{ alignItems: 'center', justifyContent: 'center'}}>
// 	<View style={{flexDirection: 'column', height: 800, padding: 20}}>
// 		<View style={{flex: 1}}>
// 			<TouchableOpacity>
// 				<Text style={{fontSize:40}}>Touch me</Text>
// 			</TouchableOpacity>
// 		</View>
// 		<View style={{flex: 1}}>
// 			<TouchableOpacity>
// 				<Text style={{fontSize:40}}>Touch me</Text>
// 			</TouchableOpacity>
// 		</View>
//
// 		<View style={{flex: 1}}>
// 			<TouchableOpacity>
// 				<Text style={{fontSize:40}}>Touch me</Text>
// 			</TouchableOpacity>
// 		</View>
//
// 		<Text>Hello World!</Text>
// 	</View>
// </View>

// <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//
// 	<TouchableOpacity onPress={this.dissapear.bind(this)}>
// 		<View style={{backgroundColor: 'red', height: 40, width: 70, display: this.state.appear}}/>
// 	</TouchableOpacity>
//
// </View>
// 	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// 		<Text style={{fontSize:20}}> {this.state.val} </Text>
//
	// <TouchableOpacity onPress={this.up.bind(this)}>
	// 	<Text style={{fontSize:20}}> Up </Text>
	// </TouchableOpacity>
	//
	// <TouchableOpacity onPress={this.down.bind(this)}>
	// 	<Text style={{fontSize:20}}> Down </Text>
	// </TouchableOpacity>
// </View>

// <View style={{marginTop: 20, flex: 1}} >
// 	<ListView
// 		renderRow={(item, section, index) => (
		// <View key={item} style={{alignItems: 'center'}}>
		// 	<TouchableOpacity onPress={this.press.bind(this, index)}>
		// 		<Text style={{fontSize: 20}}>{item}</Text>
		// 	</TouchableOpacity>
		// </View>
// 		)}
// 		dataSource={this.state.dataSource}
// 	/>
// </View>
// );

constructor(){
	super();
	this.state = {
		count: 0
	}
}

componentDidMount() {
	fetch("https://horizons-json-cors.s3.amazonaws.com/poem.txt")
	.then((resp) => {
		console.log('resp: ', resp._bodyText);
		this.setState({
			count: resp._bodyText.length
		})
	})
	.catch((err) => {
		alert(err);
	})
}

render() {
	return (
		<View style={styles.container}>
			<Text style={{fontSize: 40, marginTop: 30}}>
				Words in poem: {this.state.count}
			</Text>
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
},
});

import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ListView } from 'react-native';
import _ from 'underscore';
export default class App extends React.Component {
	constructor(){
		super();

		let dataSource = new ListView.DataSource({
			rowHasChanged: (r1, r2) => (r1 !== r2)
		});

		this.state = {
			arr: [],
			dataSource: dataSource.cloneWithRows([])
		}
	}

	componentDidMount() {
		fetch("https://horizons-json-cors.s3.amazonaws.com/products.json")
		.then((resp) => {
			return resp.json();
		})
		.then((json) => {
			console.log('json: ', json);
			return Promise.all(json.map((item) => {
				console.log('item: ', item);
				return fetch(item.url)
			}))
		})
		.then((resp) => {
			console.log('resp: ', resp);
			return Promise.all(resp.map((item) => {
				console.log('item: ', item);
				return item.json()
			}))
		})
		.then((resp) => {
			const arr = resp.map((item) => {
				let str = '';
				return str + item.name + item.priceCents
			})
			this.setState({
				arr: arr,
				dataSource: this.state.dataSource.cloneWithRows(arr)
			});
		})

		.catch((err) => {
			alert(err);
		})
	}

	render() {
		return (
			<View style={styles.container}>
					<ListView
						renderRow={(item) => (
							<View style={{alignItems: 'center', height: 60, width: 60}}>
								<Text style={{fontSize: 20, marginTop: 40}}>{item}</Text>
							</View>
						)}
						dataSource={this.state.dataSource}
					/>
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
