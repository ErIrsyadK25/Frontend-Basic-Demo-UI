import React, {Component} from 'react';

import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Hero extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					imageStyle={styles.imageStyle}
					style={styles.image}
					source={require('../assets/react.jpeg')}>
					<LinearGradient
						start={{x: 0.1, y: 0.6}}
						end={{x: 0.1, y: 1}}
						colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}
						style={styles.linearGradient}>
						<Text style={styles.textImage}>Earth of React Native</Text>
					</LinearGradient>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		borderRadius: 8,
	},
	image: {
		height: 200,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textImage: {
		fontSize: 20,
		color: '#fff',
		alignSelf: 'flex-end',
		marginLeft: 80,
		marginBottom: 15,
	},
	linearGradient: {
		flexDirection: 'row',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
		borderRadius: 8,
	},
});
export default Hero;
