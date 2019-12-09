import {ADD_COUNTER,
    ADD_TO_CART} from './mutations-types'
export default {
    addCat(context,payLoad){
        let oldProduct = context.state.cartList.find(function(item){
            return item.iid === payLoad.iid
        });
        if(oldProduct){
            // oldProduct.count += 1 
            context.commit(ADD_COUNTER,oldProduct)
        } else {
            payLoad.count = 1;
            context.commit(ADD_TO_CART,payLoad)
        }
    }
}