import React, {Component} from 'react';

import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	Image,
	ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import data from '../config/data';

class LatestMembers extends Component {
	state = {
		data: data,
	};

	latestMembers = () => {
		return this.state.data.map(singleData => {
			return (
				<View key={singleData.id} style={{alignItems: 'center', padding: 5}}>
					<Image source={{uri: singleData.user_avatar}} style={styles.avatar} />
					<Text>{singleData.username}</Text>
				</View>
			);
		});
	};

	render() {
		return (
			<View>
				<View>
					<Text style={styles.textMember}>Latest Members</Text>
				</View>
				<View style={styles.container}>
					<ScrollView horizontal>{this.latestMembers()}</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#a4b0be',
		marginVertical: 8,
		borderBottomColor: 8,
		paddingVertical: 5,
		borderRadius: 8,
	},
	imageStyle: {
		borderRadius: 8,
	},
	image: {
		height: 200,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textMember: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingTop: 15,
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
	avatar: {
		height: 50,
		width: 50,
		borderRadius: 25,
		marginHorizontal: 20,
	},
});
export default LatestMembers;
