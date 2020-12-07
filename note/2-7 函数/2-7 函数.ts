// function-types
// 函数是一等公民，作为参数，作为数组元素，可以作为返回值

// 对参数和返回值进行约束
// z 表示可选参数，可选参数后面不能添加必须参数
//
function add22(x: number, y:number, z?: number): number {
  return x + y;
}

const add23 = (x: number, y: number, z?: number): number => {
  return x + y;
}

// ts 中冒号后面都是在生命类型
// 声明函数类型
interface ISub33 {
  (x: number, y: number, z?: number): number
}

// ts 中冒号后面都是在生命类型
// 这里的箭头 => 是在声明add44的类型
let add44: (x: number, y: number, z?: number) => number = add23;
let add55: ISub33 = add23;
