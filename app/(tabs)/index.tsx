import { View, StyleSheet } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circleRed} />
      <View style={styles.circleYellow} />
      <View style={styles.circleGreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111', // пустой тёмный фон
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30, // расстояние между кругами
  },

  circleRed: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'red',
  },

  circleYellow: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'yellow',
  },

  circleGreen: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'green',
  },
});
