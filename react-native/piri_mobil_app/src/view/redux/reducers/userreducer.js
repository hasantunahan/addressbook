const INITIAL_STATE = {
    users: [],
    addUser: '',
    err: '',
    isLoading: false,
    loginUser: '',
    updateUser: ''
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'setLoginUserAddStart':
            return { ...state, err: '', isLoading: true };

        case 'setLoginUserAdd':
            return { ...state, addUser: action.payload, isLoading: false };

        case 'setLoginUserAddError':
            return { ...state, err: action.payload, isLoading: false }

        case 'isLoginStart':
            return { ...state, err: '', isLoading: true };

        case 'isLogin':
            return { ...state, loginUser: action.payload, isLoading: false };

        case 'isLoginError':
            return { ...state, err: action.payload, isLoading: false }

        case 'getUserListStart':
            return { ...state, err: '', isLoading: true };

        case 'GetUserList':
            return { ...state, users: action.payload, isLoading: false };

        case 'GetUserListError':
            return { ...state, err: action.payload, isLoading: false }

        case 'updateStart':
            return { ...state, err: '', isLoading: true };

        case 'updateUser':
            return { ...state, updateUser: action.payload, isLoading: false };

        case 'updateUserError':
            return { ...state, err: action.payload, isLoading: false }

        default:
            return state;

    }

}