import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Button } from "react-native";
import storage from "../services/Storeage";
import { DataTable } from "react-native-paper";

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
        ]?.sort((a, b) => {
          return b.score - a.score;
        });
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
            setScoreList([
              { name: route.params.name, score: route.params.score },
            ]);
            break;
        }
      });
  }, []);

  return (
    <View>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title
            style={{ display: "flex", justifyContent: "center" }}
          >
            Score
          </DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {scoreList?.map(
            (
              sc: {
                name: string;
                score: number;
              },
              idx: number
            ) => {
              return (
                <DataTable.Row key={idx}>
                  <DataTable.Cell>{sc.name}</DataTable.Cell>

                  <DataTable.Cell
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {sc.score}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            }
          )}
        </ScrollView>
      </DataTable>
      <Button
        color={"red"}
        title="Clear Scoreboard"
        onPress={() => {
          storage.remove({
            key: "scoreBoard",
            id: "1",
          });
          setScoreList([]);
        }}
      />
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    minHeight: "95%",
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
});
