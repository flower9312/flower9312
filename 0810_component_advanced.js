// 元件練習
function Example() {
  // useState, useEffect 練習
  // API URL: https://dog.ceo/api/breeds/image/random
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const responseJson = await response.json();
      setData(responseJson);
      setLoading(false);
    }
    fetchMyAPI();
  }, [])

// component Loading、圖片
function Loading(){
  return <div className="loader"></div>
}

function ImageArea(){
  return <div><img src={data.message} /></div>
}
  
  //條件運算子顯示練習
  return <div>
    {
      //loading ? <Loading /> : <ImageArea />
    }
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root0810'));
root.render(<Example />);