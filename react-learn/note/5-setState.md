# setState

> setState 对状态的改变，**可能**是异步的

如果改变状态的代码处于某个HTML元素的事件中，则其是异步的，否则是同步

```jsx
// 如果需要在状态改变之后进行操作，则可以添加第二个参数进行回调处理
this.setState({
    xxx: xxxx
}, () => {
    console.log(xxx)
})

// 在需要同步多次改变状态的情况下，可以给第一个参数传递一个函数
// 在这种情况下进行多次调用时，下一次调用会在上一个状态改变完成后将改变完的状态作为参数传递
// 实际上三次调用将会形成一个队列
this.setState(cur => ({n: cur.n + 1}), () => {
    // 如果在这种情况下使用回调函数，会在后续所有状态更新完成，并且重新渲染后执行
    console.log(this.state.n)
})
this.setState(cur => ({n: cur.n + 1}))
this.setState(cur => ({n: cur.n + 1}))
```
## 最佳实践：
1. 把所有的 setState 当作是异步的
2. 永远不要信任 setState 调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数（setState 的第二个参数）
4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState 的第一个函数）

> React 会对异步的 setState 进行优化，将多次 setState 进行合并（将多次状态改变完成后，再统一对 state 进行改变，然后触发 render）