import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

/*const GameOverScreen = props => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
      const updateLayout = () => {
          setAvailableDeviceWidth(Dimensions.get('window').width);
          setAvailableDeviceHeight(Dimensions.get('window').height);
  };

  Dimensions.addEventListener('change', updateLayout);

  return () => {
          Dimensions.removeEventListener('change', updateLayout);
      };
  });
*/

const OverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is over!</TitleText>
        <Image
          source={require("../assets/gameover.png")}
          //from web source
          //source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIQVNqDDu4eBd9i9x0Uju-ulahhJ3zH0VPM2cEyyYOmQksirS'}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed
            <Text style={styles.heighlight}> {props.roundsNumber} </Text>
            rounds to guess the number
            <Text style={styles.heighlight}> {props.userNumber} </Text>
          </BodyText>
        </View>

        <MainButton onPress={props.onRestart}> NEW GAME </MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    marginVertical: Dimensions.get("window").height / 30
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  heighlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default OverScreen;
