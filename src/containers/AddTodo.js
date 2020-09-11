import React, { Component } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  addTodo = (text) => {
    const { dispatch } = this.props;
    dispatch(addTodo(text));
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
        }}
      >
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={text}
          placeholder="Eg. Create New Video"
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => this.addTodo(text)}
        >
          <View
            style={{
              height: 50,
              backgroundColor: '#eaeaea',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ionicons
              name="md-add"
              size={30}
              style={{ color: '#de9595', padding: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);
