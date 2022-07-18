import React from 'react'
import {
  GET_HYDROPONICS,
  IS_CHANGED,
  EACH_PRODUCT
} from '../Actions/Action';

const initialStore = {
  hydroponicProducts: [],
  eachProduct: [],
}
export const HydroPonicReducer = (store = initialStore, { type, payload }) => {

  switch (type) {
    case GET_HYDROPONICS:
      return {
        ...store,
        hydroponicProducts: payload
      }

    case IS_CHANGED:
      const updatedData = store.hydroponicProducts.map((item) => {
        if (item.id == payload) {
          console.log(true)
        }
        // console.log(updatedData)
        return {
          ...store,
          hydroponicProducts: updatedData
        }
      });

      case EACH_PRODUCT:

      return {
        ...store,
        eachProduct:payload
      }

    default:
      return store
  }
}
