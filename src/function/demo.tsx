import React from 'react'
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


export default () => {
    return <div>
        <button onClick={debounce(aa.a1.bind(aa))}>debounce</button>
        <button onClick={fun.MyBind(obj, 'ttt')}>bind</button>
        </div>
}