import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function AppLayout() {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      // Usuário não autenticado, redirecionar para login
      router.replace('/');
    }
  }, [session, loading, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2A2AFF" />
      </View>
    );
  }

  if (!session) {
    return null; // Será redirecionado pelo useEffect
  }

  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="wallet"
        options={{
          title: 'Carteira',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="transactions" options={{ headerShown: false }} />
      <Stack.Screen name="create-payment-link-personalize" options={{ headerShown: false }} />
      <Stack.Screen name="create-payment-link" options={{ headerShown: false }} />
      <Stack.Screen name="kingpay-journey-details" options={{ headerShown: false }} />
      <Stack.Screen name="kingpay-journey" options={{ headerShown: false }} />
      <Stack.Screen name="payment-link-success" options={{ headerShown: false }} />
      <Stack.Screen name="payment-link" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
    </Stack>
  );
}
