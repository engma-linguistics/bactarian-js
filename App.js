import * as React from 'react';
import { useState} from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import react from 'react';
import Token from "./components/Token"

//const [modalIsVisible, setModalIsVisible] = useState(true);

// from https://reactnavigation.org/docs/drawer-based-navigation

// not hooked up to anything
// function activateModel() {
//   setModalIsVisible(true);
// }

const dictionary = [
  {originalText:"Hello", translatedText:"Hola", id:1},
  {originalText:"world", translatedText:"mundo", id:2},
  {originalText:"the", translatedText:"el", id:3},
  {originalText:"app", translatedText:"applicacion", id:4}
];

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

const textToDisplay = dictionary.map((word) => <Token
originalText={word.originalText}
translationText={word.translatedText}
key={word.id}
/>);

function Books() {
    return (
      <View style={styles.page}>
      {textToDisplay} {textToDisplay} {textToDisplay} {textToDisplay} {textToDisplay} {textToDisplay} {textToDisplay} {textToDisplay}
      </View>
  );
  }

function Flashcards() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Flashcards Screen</Text>
    </View>
  );
}

function About() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About Screen</Text>
      </View>
    );
  }

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Books" component={Books} />
      <Drawer.Screen name="Flashcards" component={Flashcards} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 16,
    flexDirection: "row",
    flexWrap: 'wrap'
  }
});