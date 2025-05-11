import { configureStore as configStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter'
import languageReducer from './slices/language'
const store =  configStore({
    reducer:{
        counter : counterReducer,
        language : languageReducer
    }
});
export default store;
