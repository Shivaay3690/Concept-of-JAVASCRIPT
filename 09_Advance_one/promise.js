const promiseOne = new Promise(function(resolve,reject){
    //do anysc task
    // do database call,crypto,newtwork 
    setTimeout(function(){
        console.log("Async task executed");
        
    },2000)
})
promiseOne.then(function(){
    console.log('Promise consumed');
    
})