import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = React.useState("");

  return (
    <ScrollView style={styles.container}>
            
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <View>
        <Text style={styles.regularText}>
                  Little Lemon is a charming neighborhood bistro that serves simple food
                  and classic cocktails in a lively but casual environment. We would love
                  to hear more about your experience with us!       
        </Text>
      </View>
         
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder={"First Name"}
        // onFocus={() => {
        //   Alert.alert("First name is focussed");
        // }}
        // onBlur={() => {
        //   Alert.alert("First name is now blurred");
        // }}
        clearButtonMode={"always"}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    padding: 40,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#fff",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "EDEFEE",
  },
});
