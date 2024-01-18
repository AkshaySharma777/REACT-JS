import {createAsyncThunk} from '@reduxjs/toolkit';
import blogApi from '../Api/BlogApi';

export const createBlog = createAsyncThunk("blogs/create", async (blog) =>{
    console.log("PlayLoad Data", blog)
    const res = await blogApi.create(blog)
    return res.data;
})

// To read all stored blogs
export const retriveBlogs = createAsyncThunk('blogs/retrive', async() => {
    const res = await blogApi.getAll()
    return res.data;
})
// To Delete a blog
export const deleteBlog = createAsyncThunk('blogs/delete', async({id}) => {
    await blogApi.getAll(id)
    return {id};
})
// To Update a blog
export const updateBlog = createAsyncThunk("blogs/update", async ({blog, id}) =>{
    const res = await blogApi.update(blog, id);
    return res.data;
})