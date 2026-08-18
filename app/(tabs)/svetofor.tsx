import { View, Text, StyleSheet } from 'react-native';

export default function HomeworkScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={[styles.light, { backgroundColor: 'red' }]}>
          <Text style={styles.text}>STOP</Text>
        </View>

        <View style={[styles.light, { backgroundColor: 'yellow' }]}>
          <Text style={[styles.text, { color: 'black' }]}>READY</Text>
        </View>

        <View style={[styles.light, { backgroundColor: 'green' }]}>
          <Text style={styles.text}>GO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },

  body: {
    backgroundColor: '#111', 
    padding: 25,
    borderRadius: 25,
    gap: 25,
  },

  light: {
    width: 130, 
    height: 130,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
