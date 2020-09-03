export const debounce = (fun, time) => {
   
    let last ;
    return (...args) => {
       if(last) clearInterval(last)
       last = setTimeout(() => {
            fun(args)
        }, time)
    }
  
}

export const throttle = (fun , time) => {
      const lastTime = +new Date()
      return (...args) => {
          const now = +new Date()
          if(now - lastTime > time) {
              fun(...args)
          }
      }
}