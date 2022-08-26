// 建立子元件，並在父元件中引入
function Example() {
  return <div>
    <p>這是父元件 Example</p>

    <div  className="example" style={{ display: "flex" }}>
      <Sidebar />
      <Main />
    </div>

  </div>
}

function Sidebar() {
  return <div className='div-border'> Sidebar </div>
}

function Main() {
  return <div className='div-border'> Main <Child /></div>
}
function Child() {
  return <div className='div-border'> Child </div>
}

const root = ReactDOM.createRoot(document.getElementById('root0809'));
root.render(<Example />);