import { configureStore } from '@reduxjs/toolkit';
import reducer from '../Reducer/BlogReducer'

const blogReducer = {
    blogs: reducer
}

// configure store
const store = configureStore({
    reducer: blogReducer,
    devTools:true
});

export default store;