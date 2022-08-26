// props 練習
function Child({ name }) {
  return <p> {name} </p>
};
function Example() {
  return (
    <div>
      <Child name="Hello!!" />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root0811'));
root.render(<Example />);