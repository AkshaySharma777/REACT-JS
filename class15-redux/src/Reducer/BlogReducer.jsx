import { buildCreateSlice, createSlice } from "@reduxjs/toolkit"
import { createBlog, deleteBlog, retriveBlogs, updateBlog } from './../Action/BlogAction';

// intitalze the state
const initialState = []

//reducer 
const blogSlice = createSlice(
    {
    name : "blog",
    initialState,
    // extraReducers : {
    //     [createBlog.fulfilled]:(state, action) => {
    //         console.log('reducer payload = ', action.payload)
    //         state.push(action.payload)
    //     },
    //     [retriveBlogs.fulfilled] : (state, action) => {
    //         return [...action.payload]
    //     },
    //     [deleteBlog.fulfilled] : (state, action) => {
    //         let index = state.findIndex(({id}) => id === action.payload.id)
    //         state.splice(index,1)
    //     },
    //     [updateBlog.fulfilled] : (state,action) => {
    //         const index = state.findIndex(blog => blog.id === action.payload.id)
    //         state[index] = {
    //             ...state[index],
    //             ...action.payload
    //         }
    //     }
    // }
    extraReducers : (builder) => {
        builder.addCase(createBlog.fulfilled, (state, action) => {
          console.log('reducer payload = ', action.payload);
          state.push(action.payload)
        });
        builder.addCase(retriveBlogs.fulfilled, (state, action) => {
           return [...action.payload]
        });
        builder.addCase(deleteBlog.fulfilled, (state, action) => {
           let index = state.findIndex(({id}) => id === action.payload.id) 
        });
        builder.addCase(updateBlog.fulfilled, (state, action) => {
           const index = state.findIndex(blog => blog.id === action.payload.id)
           state[index] = {
            ...state[index],
            ...action.payload
           }  
        });
    }
}
)

const {reducer} = blogSlice;
// default export
export default reducer