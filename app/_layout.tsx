import { Stack } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
    const insets = useSafeAreaInsets();

    return (
            <Stack screenOptions={{contentStyle: {
                paddingTop: insets.top,
                paddingBottom: insets.bottom
            }}}>
                <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
            </Stack>
    )
}