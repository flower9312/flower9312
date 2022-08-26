function Example() {
  // 練習區：宣告 state 變數、加入 handleChange 函式並與 input 綁定
  const [userData, setUserData] = React.useState({
    account: '',
    password: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((state) => ({ ...state, [id]: value }))
  }
  // 練習區結束

  const submit = () => {
    console.log(`帳號：${userData.account}，密碼：${userData.password}`)
  }
  return (
    <div>
      {/* 可依照題目需求編輯以下元素  */}
      <div>
        <label htmlFor="account">帳號</label>
        <input id="account" value={userData.account} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">密碼</label>
        <input id="password" value={userData.password} onChange={handleChange} />
      </div>
      <button onClick={submit}>送出 </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root0804'));
root.render(<Example />);
