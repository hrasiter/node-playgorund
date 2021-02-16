const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve([7, 4, 1])
        reject('This went wrong!')
        reject('Another error')
        resolve([2,3,4])
    },2000)
})

doWorkPromise.then((result)=>{
    console.log('Success', result)
}).catch((error)=>{
    console.log('Error!', error)
})