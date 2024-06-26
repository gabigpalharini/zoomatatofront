
import React from 'react';
import type {PropsWithChildren} from 'react';
import CadastroAnimal from './src/screens/CadastroAnimal';
import ListagemAnimal from './src/screens/ListagemAnimais';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditarAnimais from './src/screens/EditarAnimais';

const Stack = createStackNavigator();
function App(): React.JSX.Element{
  return(
    <NavigationContainer>
    <Stack.Navigator>
      
    <Stack.Screen name='CadastroAnimal' component={CadastroAnimal} options={{headerShown: false}}/>
      <Stack.Screen name='ListagemAnimais' component={ListagemAnimal} options={{headerShown: false}}/>
      <Stack.Screen name='EditarAnimais' component={EditarAnimais} options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>
   
   
  );
}

export default App;
 