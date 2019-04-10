import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';
import NovaReceita from './NovaReceita';

const Navigator = createStackNavigator({
    Home:{
      screen: Home,
    },
    NovaReceita: {
      screen: NovaReceita,
    }
  },{
    unmountInctiveRoutes: true,
    defaultNatigationOptions: {
      headerStyle:{
        backgroundColor: '#de9f11',
      },
      headerTintColor: '#fff',
    }
  });

const AppContainer = createAppContainer(Navigator);

export default AppContainer;