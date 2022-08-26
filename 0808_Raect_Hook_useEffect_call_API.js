function Example() {
  const [data, setData] = React.useState({})

  // 在 useEffect 中呼叫 API: https://dog.ceo/api/breeds/image/random，並把回傳的圖片 URL 顯示到畫面上
  React.useEffect(()=>{
    async function fetchMyAPI(){
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const responseJson =await response.json();
      setData(responseJson);
    }
    fetchMyAPI();
  },[])
  return <div>
    {
      //<img src={data.message} />
    }
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root0808'));
root.render(<Example />);