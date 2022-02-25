import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const buttonColor = ['red', 'orange', 'violet', 'green', 'blue', 'chocolate', 'brown'];

const xylophoneSounds = [
  require('./assets/sound1.wav'),
	require('./assets/sound2.wav'),
	require('./assets/sound3.wav'),
	require('./assets/sound4.wav'),
	require('./assets/sound5.wav'),
	require('./assets/sound6.wav'),
	require('./assets/sound7.wav')
]


handlePlaySound = async () => {
  const soundObj = new Audio.Sound()

  try {
    let source = xylophoneSounds[Math.floor(Math.random() * (6 - 0) + 0)]
    await soundObj.loadAsync(source)
    await soundObj
      .playAsync()
      .then(async playbackStatus => {
        setTimeout(() => {
          soundObj.unloadAsync()
        }, playbackStatus.playableDurationMillis)
      })
      .catch(error => {
        console.log(error)
      })
  } catch (error) {
    console.log(error)
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      {buttonColor && buttonColor.map((item,index) => (
        <View key={index} style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: item }]}
            onPress={() => this.handlePlaySound()}
          >
            <Text style={styles.buttonText}>{`Sound ${index+1}`}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    justifyContent: 'center',
	},
	buttonContainer: {
		height: 40,
		margin: 5
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#fff',
		fontSize: 18
	}
});
