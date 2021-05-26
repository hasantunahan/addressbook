import { lightTheme, darkTheme } from '../../theme/apptheme'
import { SWITCH_THEME } from './theme_actions';
import { useColorScheme} from 'react-native';
const initialState = {
    theme: darkTheme
}

const themeReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SWITCH_THEME:
            return { theme: action.theme }
        default:
            return state;
    }
}

export default themeReducer;