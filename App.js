
 import { StyleSheet,  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import GalleryScreen from './screens/GalleryScreen';
import CameraScreen from './screens/CameraScreen';
import ImageViewerScreen from './screens/ImageViewerScreen';

const Stack =createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRoutName='Camera'>
        <Stack.Screen name='Camera' component={CameraScreen} /> 
        <Stack.Screen name='Gallery' component={GalleryScreen} />
        <Stack.Screen name='ImageViewer' component={ImageViewerScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
