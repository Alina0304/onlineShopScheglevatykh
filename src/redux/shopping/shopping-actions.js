import * as actionTypes from './shopping-type'
import axios from 'axios';
let responseClone
export const getProducts = () => dispatch => {
    return fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(products => { return dispatch({type: actionTypes.GET_PRODUCTS, payload: products})})
        // .then(res => res.json())
        // .then(products => dispatch({type: actionTypes.GET_PRODUCTS, payload: products}))
}

export const filterProducts = (products, size) => (dispatch)=>{
    return dispatch({
        type: actionTypes.FILTER_PRODUCTS,
        payload: {
            size: size,
            product: size === '' ? products : products.filter(a=>a.sizes.indexOf(size)>=0)
        }
    })
}
export const addToCart = (itemID) =>{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) =>{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) =>{
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item) =>{
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    }
}