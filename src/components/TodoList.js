import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function TodoList({ todos, toggleTodo }) {
  return (
    <View style={{ padding: 20 }}>
      {todos.map((todo) => (
        <TouchableOpacity
          key={todo.id}
          onPress={() => toggleTodo(todo.id)}
        >
          <Text
            style={{
              fontSize: 24,
              textDecorationLine: todo.completed
                ? 'line-through'
                : 'none',
            }}
          >
            {todo.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default TodoList;
