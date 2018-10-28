# my-flip-animation

这是对FLIP动画的一个简单实现。

旨在用最简单的方式告诉读者FLIP是如何实现的。

## 介绍FLIP

FLIP，将一些开销高昂的动画，如针对 width，height，left 或 top 的动画，映射为 transform 动画。

所以 FLIP 来源于 First，Last，Invert，Play。

分解一下：

- First：元素的初始状态。
- Last：元素的最终状态。
- Invert：先计算出从初始状态到最终状态元素发生的改变，比如宽度、高度、透明度等，然后在元素上应用一个 transform 或 opacity 使这些改变反转。如果一个元素由初始状态到最终状态是向下移动了 90px，那就需要对元素应用 transform: translate(0, -90px)，这样就使元素看起来还在初始位置。
- Play：移除元素上的 transform 并设置 transform 相关的动画。

## API

仅暴露一个接口：

```JavaScript
function flip(element, handler, duration = 0.3, timingFn = 'ease')
```

1. element，表示需要做FLIP处理的元素
2. handler，表示一个函数，这个函数可以包含所有让element位置变化的操作，应该使用同步代码。handler的第一个参数是element，建议写成箭头函数：`(element) => {/** your code **/}`
3. duration，表示执行FLIP动画的持续时长，默认为0.3秒
4. timingFn，表示FLIP动画的加速度曲线，默认为'ease'，还有linear、step-start等可以选择

## 演示地址

[CodePen演示地址](https://codepen.io/coconilu/pen/QZoVpp)