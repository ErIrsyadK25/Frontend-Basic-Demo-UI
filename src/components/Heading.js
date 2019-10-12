import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';

class Heading extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Basic Demo UI</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ff2d91',
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		elevation: 6,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
		color: '#fff',
		marginVertical: 10,
	},
});

export default Heading;
