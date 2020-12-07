// generics

// simple type annotation
// complex type annotation: generics
// ts 最难点

// 出现的背景
// 解决什么问题

function echo22(arg: any): any {
  return arg
}

const result22: string = echo('123');

function genericEcho<T>(arg: T): T {
  return arg
}
const str22: string = 'str';
const result23 = echo(str);

// 占位符，变量
// 使用的时候，原封不动地输出

// 约束泛型
// 为什么会有这个概念
// 在函数内使用泛型变量
// 变量的属性和方法
// 先确定变量的类型，在使用对应的属性和方法
// 只允许传入包含 length 属性的变量

// 约束传入的泛型
// <T extends IWithLength>(arg: T): T

// 复杂的类型声明
// <>

// Queue<T>
// new Queue<number>()

// 内置的interface
// Array<number>

// 创建具有特定类型的容器
// 可变的参数，生成不同类型的容器
//