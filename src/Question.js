import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    color: "purple",
  },
  option: {
    fontSize: 10,
    color: "black",
  },
  question: {
    marginBottom: 10,
  },
});

export const Question = ({ title, options }) => {
  return (
    <View style={styles.question}>
      <Text style={styles.title}>{title}</Text>
      {options.map((option) => (
        <Text style={styles.option} key={Math.random()}>
          {option}
        </Text>
      ))}
    </View>
  );
};
