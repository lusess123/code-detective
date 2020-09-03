Function.prototype.MyBind = function (target: any, ...rest: any[]) {
    const self = this
    const temp: any = function () { }
    const res = function (...newRest: any[]) {
        const obj = this instanceof temp ? this : (target || window)
        self.apply(obj, rest.concat(newRest))
    }

    temp.prototype = this.prototype;
    res.prototype = new temp()

    return res
}

Function.prototype.MyNew = function (target: Function, ...rest: any[]) {
    const obj = Object.create(target.prototype)
    target.apply(obj, rest)
    return obj

}


export const myExtends = function (child, parent) {

    const temp = function () {
        this.constructor = child;
    }

    if (parent) {
        temp.prototype = parent.prototype
        child.prototype = new temp()
    } else {
        child.prototype = Object.create(parent)
    }

    return temp

}

function Cat(name) {
    const _this = Animal.call(this) || this;
    _this.name = name || 'Tom';
}


(function (child) {
    // 创建一个没有实例方法的类
    var temp = function () {
        this.constructor = child
    };
    temp.prototype = Animal.prototype;
    //将实例作为子类的原型
    Cat.prototype = new temp();

})(Cat);





function Child() {
    const this = Parent.call(this) || this
    this.Pro1 = '123'
    this.Pro2 = 'sdfdf'
}

const temp = function () {
    this.constructor = Child
}
temp.prototype = Parent.prototype
Child.prototype = new temp()