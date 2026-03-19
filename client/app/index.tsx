import { View } from "react-native";
import HomePage from "@/pages/HomePage";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <HomePage />
    </View>
  );
}
