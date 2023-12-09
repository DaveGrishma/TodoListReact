import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useState } from "react";

// custom component for a FlatList row
import RowComponent from "./components/RowComponent";

// import the todo list
import { add, todoList, clearTodoList } from "./TodoList";
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const [listData, setListData] = useState(todoList);
  const [todo, setToDo] = useState("");

  const addTask = () => {
    if (todo) {
      add(todo);
      setToDo("");
      setListData([...todoList]);
    }
  };

  const clearList = () => {
    clearTodoList();
    setListData([]);
  }
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ display: 'flex', flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20 }}>Todo List</Text>
            <TouchableOpacity onPress={clearList}><AntDesign name="delete" size={24} color="red" /></TouchableOpacity>
          </View>
          <View style={{
            display: 'flex', flex: 1, flexDirection: 'column', padding: 5, justifyContent: 'space-between'
          }}>
            {listData.length > 0 ? (
              <FlatList
                style={styles.list}
                data={listData}
                renderItem={({ item }) => {
                  return <RowComponent rowNumber={item} />;
                }}
              />
            ) : (
              <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Hurray, No tasks to do !</Text>
            )}
            <View style={{ padding: 10, flexDirection: "row" }}>
              <TextInput
                value={todo}
                placeholder="Enter Task"
                onChangeText={setToDo}
                style={{
                  flex: 1,
                  padding: 10,
                  margin: 1,
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  padding: 10,
                  borderRadius: 5,
                  marginLeft: 5,
                }}
                onPress={addTask}
              >
                <Text style={{ color: "#fff" }}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
