// 2-6 Interface-接口初探

// primitive

// Array

// object
// interface
// 对对象的形状 shape 进行描述
// duck typing
// 更多关注：对象如何被使用，更少关注于对象本身
// 类型的对象检查
//

// 推荐大写 I 开头，表示是一个接口
interface IPerson {
  readonly id: number;
  name: string;
  age?: number; // ？可选
}

let viking: IPerson = {
  id: 2,
  name: 'viking',
  age: 28
}

// readonly 用在属性
// viking.id = 3;
