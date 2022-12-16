

const cartReducer = (state,action) => {
  switch(action.type){
    case "ADD_TO_CART":{
        console.log("cartreducer",action.payload)
        return{
            ...state,
            cart:action.payload
        }
    }
    default:{
       return state;
    }
  }
}
export default cartReducer
