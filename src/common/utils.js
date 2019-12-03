export function debounce(func,delay=300){
    //采用闭包原理
    let timer = null;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay);
         
    }
}