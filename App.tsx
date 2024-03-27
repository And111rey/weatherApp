import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Provider} from 'react-redux';
import {WeatherApp} from './src/Screens';

import store from './src/redux/index';
import {ThemeProvider, useTheme} from './src/layouts/theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <ThemeProvider>
          <View style={{width: '100%', height: '100%'}}>
            <WeatherApp />
          </View>
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
