let myInstanceof =(target,origin)=>{
    while(target){
        console.log(target.__proto__,origin.prototype)
        if(target.__proto__ === origin.prototype){
            return true
        }
        target = target.__proto__
    }
    return false

}

let a = [1,2,3];
console.log(myInstanceof(a,Array))
console.log(myInstanceof(a,Object))