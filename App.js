import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
// import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <>
            
      <View style={styles.container}>
                
        <LittleLemonHeader />
                
        {/* <MenuItems /> */}
        {/* <WelcomeScreen /> */}
        <LoginScreen />
              
      </View>
            
      <View style={styles.footerContainer}>
                
        <LittleLemonFooter />
              
      </View>
          
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
