import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const OverScreen = props => {
  return (
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

      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "80%",
    height: 300,
    marginVertical: 30
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
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
