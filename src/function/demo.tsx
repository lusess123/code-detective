import React, { useState } from 'react'
import { debounce } from './index'
import './bind'


const fff = {
    f : 1,
    gg() { 
        debugger
        alert(this.f)
    }
}

class AA {
    aa = 123;
    a1 (){
        alert(this.aa)
    }
}
const aa = new AA ()

const obj = { name : 'Tom' };
function fun(a){
    alert(this.name + a);
}


let fffr = '11e'

const aaFFF = ()=> {
    const [tt] = useState('tt')
    return tt
}
export default () => {
    const  [a,aa1] = useState(2)
    const  b = aaFFF() 
    // const  [c,bb13] = useState(3)
return <div><h1>{a},, {b}</h1>
        <button onClick={debounce(aa.a1.bind(aa))}>debounce</button>
        <button onClick={fun.MyBind(obj, 'ttt')}>bind</button>
        <button onClick={()=>  { fffr = 'yyyy' , aa1(+new Date()) }}>dd</button>
        <button onClick={()=> { aa1(+ new Date())}}>rrr</button>
        <input onChange={(e) => {  setTimeout(()=> alert(e.target.value))  }} ></input>
        </div>
}