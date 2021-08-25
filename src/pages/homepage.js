import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, Button } from "react-native";
import styles from "../../assets/styles/stylesheet";

function Homepage() {
  const itemList = useSelector((state) => state.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemCardsPerPage] = useState(3);

  const lastPostIndex = currentPage * itemCardsPerPage;
  const firstPostIndex = lastPostIndex - itemCardsPerPage;
  const currentItemCards = itemList.slice(firstPostIndex, lastPostIndex);

  const pageNumber = Math.ceil(itemList.length / itemCardsPerPage);

  const nextPage = () => {
    try {
      if (currentPage < pageNumber) setCurrentPage(currentPage + 1);
    } catch (error) {
      console.log("Next button error");
    }
  };

  const prevPage = () => {
    try {
      if (currentPage !== 1) setCurrentPage(currentPage - 1);
    } catch (error) {
      console.log("Prev button error");
    }
  };

  return (
    <View>
      <View style={styles.containerRow}>
        {currentItemCards.map((details, index) => {
          console.log(details);
          const urlimages = details.images.map((img, index) => {
            // var random = img[Math.floor(Math.random() * img.length)];
            console.log(img);
            return (
              <View key={index}>
                <Image
                  source={{
                    uri: img,
                  }}
                  style={styles.img}
                />
              </View>
            );
          });
          const indexx = Math.floor(Math.random() * details.images.length);
          return (
            <View key={index}>
              <Text>{details.title}</Text>
              {urlimages[indexx]}
            </View>
          );
        })}
      </View>
      <View style={styles.rowFit}>
        <Button
          title="Previous"
          onPress={() => {
            prevPage();
          }}
          disabled={currentPage <= 1}
        />
        <Button
          title="Next"
          onPress={() => {
            nextPage();
          }}
          disabled={currentPage >= pageNumber}
        />
      </View>
    </View>
  );
}

export default Homepage;
