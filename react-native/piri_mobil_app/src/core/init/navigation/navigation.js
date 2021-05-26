import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator4 } from 'react-navigation-shared-element';
import LoginPage from '../../../view/login/login';
import HomeNavigation from '../../../view/home/home/home_navigation';
import SigninPage from '../../../view/login/_signin/signin';
import SignupPage from '../../../view/login/_signup/signup';
import UpdateUserPage from '../../../view/home/_homepartial/home/update_user_view'
import add_new_user from '../../../view/home/_homepartial/home/add_new_user';

const Navigation = createSharedElementStackNavigator4(
  {
    Login: LoginPage,
    Home : HomeNavigation,
    Signin : SigninPage,
    Signup : SignupPage,
    Update :UpdateUserPage,
    AddNew : add_new_user
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
      cardStyle: {
        backgroundColor: 'transparent'
      },
      cardStyleInterpolator: (
        {
          current: { progress }
        }
      ) => {
        return { cardStyle: { opacity: progress } }
      }
    },
  }
);

export default createAppContainer(Navigation);
