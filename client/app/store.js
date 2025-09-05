import {configureStore} from '@reduxjs/toolkit';
import { authApi } from '../features/authApi'; 
import rootReducer from './rootReducer';

export const store = configureStore({
 reducer:rootReducer,
 middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
});

