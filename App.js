import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './src/TodoApp';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
