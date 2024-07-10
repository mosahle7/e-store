// 
const Storage = (cartItems) => {
    localStorage.setItem('cart',JSON.stringify(cartItems.length > 0 ? cartItems:[]));
}
export const CartReducer = (state,action) => {
    debugger;
    

    let index = -1;

    if(action.payload)
        index= state.cartItems.findIndex(x => x.id === action.payload.id);    
    debugger;
    let newItems = [...state.cartItems];
    switch(action.type) {
        case 'ADD':
        case 'INCQTY':
            if (index === -1) {
                // state.cartItems.push({...action.payload, quantity: 0.5});
                newItems.push({...action.payload, quantity:1});
               

            }
            else{
                // state.cartItems[index].quantity+=0.5;
                newItems[index].quantity+=1;
                // newItems[index] = {...newItems[index], quantity: newItems[index].quantity+=0.5};
               
            }
            
            // return {...state};
            break;

            
        // case 'REMOVE':
        //     if (index>-1) {
        //     state.cartItems.splice(index,1);
        //     }
        //     break;

        case 'REMOVE':
            if (index > -1) {
        // Create a new cartItems array without the removed item
            //     const newCartItems = [
            //     ...state.cartItems.slice(0, index),
            //     ...state.cartItems.slice(index + 1),
            //     ];
            //     return { ...state, cartItems: newCartItems };
            // }
            // return { ...state };
                newItems = state.cartItems.filter(x => x.id !== action.payload.id); //newArray not splice
            
            } 
            
            break;
        case 'DECQTY':
            // if (index>-1){
            //     if (state.cartItems[index].quantity>0){
            //     state.cartItems[index].quantity-=0.5;
            //     }
            // }
            // return {...state};
                if (index>-1) {
                    if (newItems[index].quantity>1){
                    newItems[index].quantity-=1;
                    
                    }
                   
                }
               
                break;

        case 'CLEAR':
            // state.cartItems = [];
            newItems = [];
        
            // return {...state};
            break;
        
        default:
            // return newItems;
        }
        state.cartItems=newItems;
        Storage(newItems);
        return state;
    }
