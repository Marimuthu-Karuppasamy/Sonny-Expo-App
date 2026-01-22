import { Text, StyleSheet } from 'react-native';

export default function Greeting() {
  return (
    <>
    <Text style={styles.greeting}>Greeting, Marimuthu Karuppasamy!</Text>
    <Text>
    In this project I will learn 4 different app development projects using React Native, TypeScript, and Expo. 
Each project will help me practice core concepts of mobile development, including UI design, navigation, 
state management, and integration with native device features. By the end, I will have hands-on experience 
building cross-platform apps with modern tools and frameworks. </Text>
</>
  );
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: 20,
    color: 'blue',
  },
});
