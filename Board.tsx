import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import storage from "./Storeage";

const Board = ({ navigation, route }: any) => {
  const [scoreList, setScoreList] = useState<{ name: string; score: number }[]>(
    []
  );

  useEffect(() => {
    storage
      .load({
        key: "scoreBoard",
        id: "1",
      })
      .then((res) => {
        const reList = [
          ...res,
          { name: route.params.name, score: route.params.score },
        ];
        console.log(reList);
        setScoreList(reList);
        storage.save({
          key: "scoreBoard",
          id: "1",
          data: reList,
        });
      })
      .catch((err) => {
        switch (err.name) {
          case "NotFoundError":
            storage.save({
              key: "scoreBoard",
              id: "1",
              data: [{ name: route.params.name, score: route.params.score }],
            });
            break;
        }
      });
  }, []);

  return (
    <Text>
      {route.params.name}
      {route.params.score}
    </Text>
  );
};

export default Board;
