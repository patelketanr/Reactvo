import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.title}>ReactVo</Text>
        <View style={styles.nav}>
          <TouchableOpacity>
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLink}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLink}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: "#1a1a1a",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    justifyContent: "center",
    paddingTop: 40, // Account for status bar
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
  },
  nav: {
    flexDirection: "row",
    gap: 24,
  },
  navLink: {
    color: "#ffffff",
    fontSize: 16,
  },
})
