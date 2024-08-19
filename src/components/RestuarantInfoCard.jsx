import React from "react";
import { StyleSheet, View as ViewComp, Text } from "react-native";
import { Card as PaperCard } from "react-native-paper";
import styled from "styled-components/native";

const RestuarantInfoCard = ({ restuarant = {} }) => {

  const Title=styled.Text`
  padding:16px;
  color:red;
  `;
  const CardContainer=styled(PaperCard)`
    background-color: white;

    
  `;
  const CartCover=styled(PaperCard.Cover)`
    padding: 20px;
    background-color: white;
  
  `;
  const ViewContainer=styled(ViewComp)`

/* background-color: ${(props) => props.theme.colors.brand.primary}; */

background-color: ${(props) => props.theme.colors.brand.primary}; 
  padding: 16px;
  margin-top: 10px;

  flex: 1;
  height: 100%;
`;

  

  


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
    <ViewContainer >
      <CardContainer>
        <PaperCard.Title
          title={name}
          subtitle={address}
          // left={LeftContent}
        />
        <PaperCard.Content>
          <Text variant="bodyMedium">Card content</Text>
        </PaperCard.Content>
        <CartCover
          key={name}
          source={{ uri: photos[1] }}
        />
        <Title>{name}</Title>
      </CardContainer>
    </ViewContainer>
  );
};

// const styles = StyleSheet.create({
//   list: {
//     backgroundColor: "red",
//     padding: 16,
//     marginTop: 10,
//     flex: 1,
//     height: "100%",
//   },
//   listText: {
//     color: "yellow",
//   },
//   card: {
//     backgroundColor: "white",
//   },
//   cover: {
//     padding: 20,
//     backgroundColor: "white",
//   },
//   title: {
//     padding: 16,
//   },
// });

export default RestuarantInfoCard;
