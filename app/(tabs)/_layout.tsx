import { Redirect, Stack } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';

export default function RootLayout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    if (!isLoggedIn) {
        return <Redirect href='/login' />
    }

    return <Stack
        screenOptions={{
            
        }}>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(pages)' options={{ headerShown: false }} />
    </Stack>;
};