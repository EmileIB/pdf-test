import React from "react";
import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import { Question } from "./Question";

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
});

export const MyDocument = ({ questions }) => {
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
          {questions.map((question) => (
            <Question
              title={question.title}
              key={Math.random()}
              options={question.options}
            />
          ))}
        </View>
      </Page>
    </Document>
  );
};
