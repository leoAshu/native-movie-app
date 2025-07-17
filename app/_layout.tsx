import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import './globals.css';

const RootLayout = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='movies/[id]' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
