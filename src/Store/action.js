import { ADD_TO_BASKET, CHANGE_PRODUCT_COUNT, REMOVE_BASKET } from "./type"


export function addBasket(id, img, price, text, date, person, count ) {
       return {
              type: ADD_TO_BASKET,
              data: { id, img, price, text, date, person, count  }
       }
}

export function changeProductCount(value, id, price ) {
       return {
              type: CHANGE_PRODUCT_COUNT,
              data: { value, id, price  }
       }
}

export function removeBasket(id) {
       return {
              type: REMOVE_BASKET,
              id
       }
}