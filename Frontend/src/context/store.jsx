import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
    departments: [],
    employees: [],
    isLoading: false,
    editingRegister: {
        type: '',
        id: '',
        isEditing: false
    },
    apiError: false
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: composedEnhancer
});

export default store;