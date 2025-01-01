import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    // items ke base pe hum count store krte hai remeber kyu ki hume saare cart items ke cart ke values dikhane hote hai
    cartItems:{},
    totalCart:0

};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
          
            const productId = action.payload
            if(state.cartItems[productId]){
                state.cartItems[productId] += 1;
            }else{
                     state.cartItems[productId] = 1;
            }
            state.totalCart += 1;
           
            
        },
        removeFromCart:(state,action)=>{
            const productId = action.payload
            if(state.cartItems[productId]){
                state.cartItems[productId] -= 1;
            }else{
                     state.productsCart[productId] = 0;
            }
            state.totalCart -= 1;
           
        },
       
    }
});

export const {addToCart,removeFromCart,totalCart} = cartSlice.actions;
export default cartSlice.reducer;