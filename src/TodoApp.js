import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

function TodoApp() {
  return (
    <View style={styles.container}>
      <AddTodo />
      <View>
        <VisibleTodos />
      </View>
    </View>
  );
}

export default TodoApp;
