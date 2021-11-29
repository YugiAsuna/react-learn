## \<Ball>\</Ball>

```js
ReactDOM.render(
    (
        <>
            <Ball size={50} xSpeed={1} ySpeed={1} bgColor="#ff4400"></Ball>
            <Ball size={50} xSpeed={1} ySpeed={2} bgColor="#123456"></Ball>
            <Ball size={50} xSpeed={2} ySpeed={1} bgColor="#ccc"></Ball>
            <Ball size={50} xSpeed={2} ySpeed={3} bgColor="green"></Ball>
        </>
    ),
    document.getElementById('root')
);
```