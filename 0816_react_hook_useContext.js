// 練習：定義 createContext
const myTest = React.createContext();
function BlueComponent () {
  // 練習：使用 useContext 取得 User 資料
  const user = React.useContext(myTest);
  return <p style={{ color: 'blue' }}> 藍色的1 {user}</p>
}
function RedComponent () {
  // 練習：使用 useContext 取得 User 資料
  const user = React.useContext(myTest);
  return <p style={{ color: 'red' }}> 紅色的1 {user}</p>
}
function Example() {
  const [user, setUser] = React.useState("Nick");
  // 練習：使用 useContext.Provider 傳遞 user 資料
  return <myTest.Provider value={user}>
    <BlueComponent />
    <RedComponent />
  </myTest.Provider>;
}

const root = ReactDOM.createRoot(document.getElementById('root0816'));
root.render(<Example />);