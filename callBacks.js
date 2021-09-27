

// console.log('haari');
// setTimeout(function(){
// console.log('kishann');	})
// console.log("reddy");

//callbacks have function(result,error){if (!error){return reslut}}

// function x(callback){
//     console.log('x');
//     callback(10)
// }
// x(function(value,error){console.log(value);})


// function step1(value,callback){
//     callback(value+10,false)
// }
// function step2(value,callback){
//     callback(value+10,false)
// }
// function step3(value,callback){
//     callback(value+10,false)
// }
// step1(10,(result1,error)=>{
//     console.log('Result1:',result1);
//     if(!error){
//         step2(result1,(result2,error)=>{
//             console.log('Result2:',result2);
//             if(!error){
//                 step3(result2,(result3,error)=>{
//                     console.log("Result3:",result3);
//                 })
//             }
//         })
//     }
// })


//solution for callback hell
// step1(10,function(result,error){
//     if(!error){
//         return result
//     }
// })

// function step1(value,callback){
//     let result=callback(value+10,false)
//     step2(result,function(result1,error){
//         if(!error){
//             return result1
//         }
//     })

// }
// function step2(value,callback){
//     let result1=callback(value+10,false)
//     console.log(result1);
// }

///////Promises

// function step1(value,error){
//     return new Promise((resolve,reject)=>{
//         if (!error){
//             resolve(value)
//         }
//         else{
//             reject('somethong went wrong')
//         }

//     })
// }
// function step2(value,error){
//     return new Promise((resolve,reject)=>{
//         if (!error){
//             resolve(value)
//         }
//         else{
//             reject('somethong went wrong')
//         }

//     })
// }
// function step3(value,error){
//     return new Promise((resolve,reject)=>{
//         if (!error){
//             resolve(value)
//         }
//         else{
//             reject('somethong went wrong')
//         }

//     })
// }
// step1(10,false)
// .then(result=>step2(result,false))
// .then(result1=>step3(result1,false)).
// then(result2=>console.log(result2))
// .catch(err=>console.log(err))


// const p1=Promise.reject('Hekko Mama')
// const p2=100
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,"sajdhdsjakdhkjhaskjd")
// })
// Promise.allSettled([p1,p2,p3]).then(result=>console.log(result))




//  Async Await  .....async gives promise so if u want value use await it give value inside function if u want use outside .then(result=>log(result)) has to be used .Ante await use cheste async function lo matrame value ni tiskogalam ade value ni bayata ki tiskovali ante promise laga tiskovali
function step1(value,error){
        return new Promise((resolve,reject)=>{
            if (!error){
                resolve(value)
            }
            else{
                reject('somethong went wrong')
            }
    
        })
    }
    function step2(value,error){
        return new Promise((resolve,reject)=>{
            if (!error){
                resolve(value+10)
            }
            else{
                reject('somethong went wrong')
            }
    
        })
    }
    function step3(value,error){
        return new Promise((resolve,reject)=>{
            if (!error){
                resolve(value+10)
            }
            else{
                reject('somethong went wrong')
            }
    
        })
    }
async function result(){
    let result1= await step1(10,false)
    let result2=await step2(result1,false)
    let result3=await step3(result2,false)
    return result3
}
result().then(result=>console.log(result))
// result().then(result=>console.log(result))