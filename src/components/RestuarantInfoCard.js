import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";

const RestuarantInfoCard = ({ restuarant = { undefined } }) => {
  const {
    name = "restuarant",
    icon,
    photos = [
      "https://en.wikipedia.org/wiki/PNG#/media/File:PNG_transparency_demonstration_1.png",
      "https://picsum.photos/700",
    ],
    address = "canada",
    isOpenNow = true,
    rating = 5,
    isClosedTemporary = false,
  } = restuarant;
  return (
    <View style={styles.list}>
      <Card elevation={5} style={styles.card}>
        <Card.Title
          title={name}
          subtitle={address}
          // left={LeftContent}
        />
        <Card.Content>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[1] }}
        />
        <Text style={styles.title} variant="titleLarge">
          {name}
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "red",
    padding: 16,
    marginTop: 10,
    flex: 1,
    height: "100%",
  },
  listText: {
    color: "yellow",
  },
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});

export default RestuarantInfoCard;
