import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    width: "30%",
  },
  text: {
    fontSize: 10,
  },
});

export const MyDocument = ({ count }) => {
  return (
    <Document>
      <Page
        style={styles.page}
        size={{
          width: 11.83 * 72,
          height: 10.0 * 72,
        }}
      >
        <View style={styles.section}>
          <Text style={styles.text}>Section #1 - Count</Text>
          <Text style={styles.text}>{count}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Section #2</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Section #3</Text>
        </View>
      </Page>
    </Document>
  );
};
