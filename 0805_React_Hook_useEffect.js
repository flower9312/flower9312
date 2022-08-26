function Timer() {
  const [count, setCount] = React.useState(0);
  // 加入 useEffect 練習
  React.useEffect(()=>{
    //console.log('count 當前值'+ count); //這方法也可以
    console.log(`count 當前值 ${count}`);
  },[count]);
  
  return <div style={{ textAlign: "center"}}>
    <h1> {count} </h1>
    <button onClick={() => setCount(count + 1)}>更新</button>
  </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root0805'));
root.render(<Timer />);