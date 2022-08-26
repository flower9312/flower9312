function Example() {
  // 宣告一個新的 state 變數，我們叫他「count」
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>現在的數字是 {count}</p>
      <button onClick={() => setCount(count+1)}>加一</button>
      <button onClick={() => setCount(count-1)}>減一</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root0803'));
root.render(<Example />);
