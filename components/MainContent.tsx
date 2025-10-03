import { View, Text, StyleSheet, ScrollView } from "react-native"

export function MainContent() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to ReactVo</Text>
        <Text style={styles.description}>
          This is your main content area. The header stays fixed at the top, the footer stays fixed at the bottom, and
          the sidebar remains on the left.
        </Text>

        <View style={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.cardTitle}>Card {i}</Text>
              <Text style={styles.cardText}>
                This is a sample card to demonstrate the layout with scrollable content.
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.sections}>
          {[1, 2, 3, 4, 5].map((i) => (
            <View key={i} style={styles.section}>
              <Text style={styles.sectionTitle}>Section {i}</Text>
              <Text style={styles.sectionText}>
                Scroll down to see how the header and footer remain fixed while the content scrolls. The sidebar also
                stays in place on the left side.
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    padding: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#1a1a1a",
  },
  description: {
    fontSize: 18,
    color: "#666",
    marginBottom: 32,
    lineHeight: 28,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    marginBottom: 48,
  },
  card: {
    width: "45%",
    padding: 24,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1a1a1a",
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  sections: {
    gap: 16,
  },
  section: {
    padding: 24,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1a1a1a",
  },
  sectionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
})
