import axios from 'axios';

const blogApi = {
    create : async (blog) => {
        return axios.request({
            method : "POSt",
            url : `/blogs`,
            data : blog
        })
    },
    getAll : async () => {
        return axios.request({
            method : "GET",
            url : "/blogs"
        })
    },
    delete : async (id) => {
        return axios.request({
            method : "delete",
            url : `/blogs/${id}`
        })
    },
    getSingle : async (id) => {
        return axios.request({
            method : "GET",
            url : `/blogs/${id}`
        })
    },
    update : async (blog, id) => {
        return axios.request({
            method : "PATCH",
            url : `/blogs/${id}`,
            data : blog
        })
    }
}

export default blogApi;