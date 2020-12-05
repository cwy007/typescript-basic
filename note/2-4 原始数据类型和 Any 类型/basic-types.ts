// ts 中对应 js 中的原始数据类型
// boolean
// number
// string
// undefined
// null

let isDone: boolean = false

let age: number = 10

let firstName: string = 'viking'
let message: string = `Hello, ${firstName}`

let u: undefined = undefined

let n:null = null

// number 类型可以赋值 undefined
let num: number = undefined

// any 类型可以赋值任何变量
// 任意值
//
let notSure: any = 4
notSure = 'maybe a string'
notSure = true

// 任意值上调用任何属性也是允许的，不会报错
//
notSure.myName
notSure.getName()

// 又明确的类型时，要避免使用any
