import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export function Sidebar() {
  const menuItems = [
    { icon: "home-outline", label: "Dashboard" },
    { icon: "people-outline", label: "Users" },
    { icon: "document-text-outline", label: "Documents" },
    { icon: "bar-chart-outline", label: "Analytics" },
    { icon: "settings-outline", label: "Settings" },
  ]

  return (
    <View style={styles.sidebar}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.nav}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.label} style={styles.menuItem}>
              <Ionicons name={item.icon as any} size={20} color="#666" />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  sidebar: {
    width: 240,
    backgroundColor: "#f5f5f5",
    borderRightWidth: 1,
    borderRightColor: "#e0e0e0",
  },
  scrollView: {
    flex: 1,
  },
  nav: {
    padding: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  menuLabel: {
    fontSize: 16,
    color: "#333",
  },
})
