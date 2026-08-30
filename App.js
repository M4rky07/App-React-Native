import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from './screens/Inicio';
import TopAnimes from './screens/TopAnimes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen
          name="Início"
          component={Inicio}
        />

        <Tab.Screen
          name="Top Animes"
          component={TopAnimes}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}