import {ActionTypes} from "../constants/action-types"


const initialState = {
  products:[]
   /* products: [
    {
        id:1,
        title:"Mac 14 Pro",
        category:"desktop"
    }
   ] */
}



export const productsReducer = (state=initialState,{type,payload}) => {
  switch(type){
    case ActionTypes.SET_PRODUCTS:
      return {...state,products:payload}
    case ActionTypes.FETCH_PRODUCTS:
      return {...state,products:payload}
    default:
      return state

  }
}

export const selectedProductsReducer = (state={}, {type,payload}) => {
  console.log(type)
  switch(type){
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload}
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {}
    default:
      return state

  }
}
