import React from 'react';
import Navigation from './src/core/init/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { DarkTheme } from './src/core/init/theme/color/dark_theme_color';
import { LightTheme } from './src/core/init/theme/color/light_theme_color';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './src/view/redux/reducers/userreducer';
const App = () => {

  const store = createStore(reducer, applyMiddleware(thunk));

  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}


export default App;