import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
class Home extends React.Component {
  state = {
    name: ""
  };
  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name :</Text>
        <TextInput
          onChangeText={text => {
            this.setState({ name: text });
          }}
          value={this.state.name}
          style={styles.input}
          placeholder="John Snow"
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              text: this.state.name
            });
          }}
        >
          <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  input: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    margin: 20
  },
  buttontext: {
    marginLeft: 20,
    fontSize: 20
  }
});
export default Home;
