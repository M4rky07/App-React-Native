import { StyleSheet, Text, View } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        App 1
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});