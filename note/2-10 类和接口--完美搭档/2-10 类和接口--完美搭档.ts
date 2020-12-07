// 2-10 类和接口--完美搭档
// 接口
// 使用接口对类的一部分内容进行抽象
// 跳高面向对象的灵活性

interface Radio2 {
  // void 表示什么都不返回
  switchRadio(trigger: boolean): void;
}

interface Battery2 {
  checkBatteryStatus2(): void;
}

interface RadioWithBAttery2 extends Radio2 {
  checkBatteryStatus2(): void;
}

class Car2 implements Radio2 {
  // 打开收音机
  switchRadio(trigger: boolean) {

  }
}

class Cellphone2 implements RadioWithBAttery2{
  switchRadio(trigger: boolean) {

  }
  checkBatteryStatus2() {

  }
}

// 接口也可以继承
// 契约
// duck type 多态
