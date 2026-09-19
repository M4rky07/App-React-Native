import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import Inicio from './screens/Inicio';
import Animes from './screens/Animes';
import Generos from './screens/GenerosTela';

const Tab = createBottomTabNavigator();

function Navegacao() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#1c1c2b',
          borderTopColor: '#2b2b40',

          height: 65 + insets.bottom,

          paddingTop: 8,
          paddingBottom: 8 + insets.bottom,
        },

        tabBarActiveTintColor: '#6c3cff',
        tabBarInactiveTintColor: '#9999aa',

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen name="Início" component={Inicio} />
      <Tab.Screen name="Animes" component={Animes} />
      <Tab.Screen name="Gêneros" component={Generos} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navegacao />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}