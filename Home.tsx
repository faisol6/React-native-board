import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { ListItem } from "./ListItem";
import { RadioButton } from "react-native-paper";
import { useForm, useController, Control, FieldValues } from "react-hook-form";
import { useIsFocused } from "@react-navigation/native";

const Home = ({ navigation }: any) => {
  const isFocused = useIsFocused();
  const { control, handleSubmit } = useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  React.useEffect(() => {
    isFocused && setModalVisible(false);
  }, [isFocused]);

  const RandomList = (
    array: {
      qId?: number;
      question?: string;
      answer?: { id: number; text: string; check: boolean }[];
      id?: number;
      text?: string;
      check?: boolean;
    }[]
  ) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const onSubmit = (data: any) => {
    const result = Object.keys(data)
      .map((key) => data[key])
      ?.filter((f) => f === true);
    setScore(result?.length);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {RandomList(ListItem)?.map(
          (
            item: {
              qId?: number;
              question?: string;
              answer?: { id: number; text: string; check: boolean }[];
            },
            idx: number
          ) => (
            <View key={idx}>
              <View style={styles.question}>
                <Text style={styles.questionText}>
                  {idx + 1}.{item?.question}
                </Text>
              </View>
              <View style={styles.answer}>
                <CheckboxGroup
                  items={RandomList(item?.answer || [])}
                  control={control}
                  name={item?.qId?.toString() || ""}
                />
              </View>
            </View>
          )
        )}
      </ScrollView>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text>Name:</Text>
          <TextInput
            style={{ borderWidth: 1, height: 50, paddingHorizontal: 10 }}
            onChangeText={setName}
          />
          <View style={{ paddingTop: 20 }}>
            <Button
              title="Submit"
              onPress={() =>
                navigation.navigate("Board", { name: name, score: score })
              }
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  question: {
    flexDirection: "row",
    backgroundColor: "#3B5323",
    minHeight: 34,
  },
  questionText: {
    alignSelf: "center",
    marginLeft: 10,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  answer: {
    // flexDirection: "row",
    backgroundColor: "#148761",
    minHeight: 34,
    padding: 5,
    display: "flex",
  },
  answerText: {
    alignSelf: "center",
    marginLeft: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export const CheckboxGroup = ({
  name,
  control,
  items,
}: {
  name: string;
  control: Control<FieldValues, any>;
  items: {
    qId?: number;
    question?: string;
    answer?: { id: number; text: string; check: boolean }[];
    id?: number;
    text?: string;
    check?: boolean;
  }[];
}) => {
  const isFocused = useIsFocused();
  const [checkboxState, setCheckboxState] = useState(0);
  const { field } = useController({
    control,
    defaultValue: false,
    name,
  });

  React.useEffect(() => {
    isFocused && setCheckboxState(0);
  }, [isFocused]);

  return items?.map((i, idx) => (
    <View
      key={idx}
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <RadioButton
        value={i?.id?.toString() || ""}
        status={checkboxState === i?.id ? "checked" : "unchecked"}
        onPress={() => {
          setCheckboxState(i?.id || 0);
          field.onChange(i?.check);
        }}
        color={"white"}
        uncheckedColor={"white"}
      />
      <Text style={{ color: "white" }}>{i?.text}</Text>
    </View>
  ));
};
