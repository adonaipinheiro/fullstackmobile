import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import Preload from './screens/preload';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import ConfirmarCadastro from './screens/cadastro/confirmarCadastro';
import Dashboard from './screens/dashboard';

const defaultStackConfig = {
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  }),
  defaultNavigationOptions: {
    header: null,
  },
  unmountInactiveRoutes: true,
};

const Routes = createAppContainer(
  createSwitchNavigator({
    Preload: { screen: Preload },
    Welcome: createStackNavigator(
      {
        Login: { screen: Login },
        Cadastro: createStackNavigator(
          {
            Cadastro: { screen: Cadastro },
            ConfirmarCadastro: { screen: ConfirmarCadastro },
          },
          defaultStackConfig
        ),
      },
      defaultStackConfig
    ),
    Dashboard: { screen: Dashboard },
  })
);

export default Routes;
