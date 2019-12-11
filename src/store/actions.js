import {ADD_COUNTER,
    ADD_TO_CART} from './mutations-types'
export default {
    addCat(context,payLoad){
        return new Promise((resolve,reject) => {
            let oldProduct = context.state.cartList.find(function(item){
                return item.iid === payLoad.iid
            });
            if(oldProduct){
                // oldProduct.count += 1 
                context.commit(ADD_COUNTER,oldProduct);
                resolve('商品数量+1')
            } else {
                payLoad.count = 1;
                payLoad.checked = true
                context.commit(ADD_TO_CART,payLoad);
                resolve('添加欣赏')
            }
        })
    }
}