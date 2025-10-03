import { View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/Sidebar"
import { MainContent } from "./components/MainContent"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <View style={styles.body}>
        <Sidebar />
        <MainContent />
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  body: {
    flex: 1,
    flexDirection: "row",
  },
})
