// 枚举 enum
// 常量
// 一定范围内的一系列常量
// 数字枚举
enum Direction2 {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction2.Up) // 0
console.log(Direction2[0]) // Up

enum Direction22 {
  Up = 10,
  Down,
  Left,
  Right
}

// 双向赋值的过程
// 常量枚举
// const enum
// 类型：常量值，计算值
//