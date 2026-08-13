import { stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack> 
            <Stack.Screen name="index"
            screenOptions={{ headershown: false }}/>
            <Stack.Srceen name="register" options={{ title: 'criar conta'}} />
        </Stack>
    );
} 