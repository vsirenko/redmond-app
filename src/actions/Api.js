import axios from "axios";

const API = 'https://polaris-shop.com.ua/api/'


export const getCatalog = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${API}get_menu/category-menu`)
            .then(response => {
                resolve(response.data)
            })
            .catch(e => {
                if (e.response && e.response.data && e.response.data.msg) reject(e.response.data.msg)
                else reject(e.message)
            })
    })
}


export const getItems = (id, page) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${API}get_products_by_cat/${id}?page=${page}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(e => {
                if (e.response && e.response.data && e.response.data.msg) reject(e.response.data.msg)
                else reject(e.message)
            })
    })
}


export const getItemBody = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${API}get_product/${id}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(e => {
                if (e.response && e.response.data && e.response.data.msg) reject(e.response.data.msg)
                else reject(e.message)
            })
    })
}