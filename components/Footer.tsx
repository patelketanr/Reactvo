import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Text style={styles.copyright}>© 2025 ReactVo. All rights reserved.</Text>
        <View style={styles.links}>
          <TouchableOpacity>
            <Text style={styles.link}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>Terms</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    height: 56,
    backgroundColor: "#1a1a1a",
    borderTopWidth: 1,
    borderTopColor: "#333",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  copyright: {
    fontSize: 14,
    color: "#ffffff",
  },
  links: {
    flexDirection: "row",
    gap: 16,
  },
  link: {
    fontSize: 14,
    color: "#ffffff",
  },
})
