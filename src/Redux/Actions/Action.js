import axios from 'axios'
export const   GET_HYDROPONICS = "GET_HYDROPONICS"
export const   IS_CHANGED = "IS_CHANGED"
export const EACH_PRODUCT = "EACH_PRODUCT"

export const getHydroponicData = (product) =>{
    return {
        type:GET_HYDROPONICS,
        payload: product
    }
}

export const isChecked = (checkId) =>{
    console.log(checkId)
    return{
        type:IS_CHANGED,
        payload:checkId
    }
}

export const singlePage = (product) =>{
    return{
        type:EACH_PRODUCT,  
        payload:product
    }
}

export const eachProduct = (id) => async(dispatch) =>{
        
        const singleProduct = await axios.get(`https://acmefresh.herokuapp.com/hydroponic/${id}`)
        dispatch(singlePage(singleProduct.data))
}







