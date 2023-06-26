import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    productData:[],
    userInfo: null,
};

export const BazarSlice = createSlice({
    name:"bazar",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.productData.find(
                (item) => item._id === action.payload
                
            );

            if(item){
                item.quantity += action.payload.quantity;
            }
            else{
                 state.productData.push(action.payload);
            }
        },
        deleteItem:(state,action)=>{
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state)=>{
            state.productData = [];
        },
        incrementQuantity: (state,action)=>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item){
                item.quantity++;
            }
        },
        decrementQuantity: (state,action)=>{
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if(item.quantity === 1){
                item.quantity += 0;
            }
            else{
                item.quantity--;
            }
        },
        addUser:(state,action)=>{
            state.userInfo = action.payload;
        },
        removeUser:(state)=>{
            state.userInfo = null;
        },

    },
});


export const {addToCart,decrementQuantity,deleteItem,resetCart,incrementQuantity,addUser,removeUser} = BazarSlice.actions;
export default BazarSlice.reducer;