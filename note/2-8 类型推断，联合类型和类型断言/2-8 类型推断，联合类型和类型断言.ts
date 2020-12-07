// 类型推断
// 没有明确指定时，会自动推断类型
//
// type inference
//
let str = 'str';

// union types
// 联合类型
// 只能访问共有的属性和方法
//
let numOrStr: number | string;

function getLength(input: string | number): number {
  // 类型断言
  // type assertion
  const str = input as string; // 指定联合类型中的一种

}

// type guard
