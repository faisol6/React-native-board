import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {AccordionList} from "accordion-collapse-react-native";

export default function App() {
const ListItem = [
                       {
                         id:1,
                         title: 'Getting Started',
                         body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
                       },
                       {
                         id:2,
                         title: 'Components',
                         body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
                       }
                       ];

const _head =(item:any)=>{
          return(
              <View style={{alignItems:'center'}}>
                <Text>{item.title}</Text>
              </View>
          );
      }
const _body=(item:any) =>{
    return (
        <View style={{padding:10}}>
          <Text style={{textAlign:'center'}}>{item.body}</Text>
        </View>
    );
}
  return (
    <View style={{ height: "100vh", justifyContent: "center" }}>
          <ScrollView contentContainerStyle={{ height: "100%" }}>
      <Text>Open up App.tsx to start working on your app!</Text>
       <AccordionList
                  list={ListItem}
                  header={_head}
                  body={_body}
                  keyExtractor={item => `${item.id}`}
                />
     </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
