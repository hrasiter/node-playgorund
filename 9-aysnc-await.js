const add = (a,b)=>{
    return new Promise((resolve, reject)=>{
        if(a < 0 || b < 0)
            reject('Numbers must be positive')
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    })
}

const doWork = async () =>{
    const sum = await add(1,99)
    const sum2 = await add(sum,-50)
    const sum3 = await add(sum2,-100)
    return sum3
}

doWork().then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log('e! ', e)
})