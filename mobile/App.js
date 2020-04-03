import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StepUm from './src/pages/StepUm';
import StepDois from './src/pages/StepDois';
import StepTres from './src/pages/StepTres';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen 
          name="StepUm" 
          component={StepUm}
          options={{ 
            title: 'Step 1'
          }}
        />
        <Stack.Screen 
          name="StepDois" 
          component={StepDois}
          options={{ title: 'Step 2' }}
        />
        <Stack.Screen 
          name="StepTres" 
          component={StepTres}
          options={{ title: 'Step 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;