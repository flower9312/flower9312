function Modal({open,toggleOpen}) {
  return <div className="modal" style={{ display: open? 'block' : 'none'}}> 
    <div className="modal-content">Modal 
      <button className="close" onClick={toggleOpen} > x </button> 
    </div>
  </div>; 
};
function Example() {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <button onClick={toggleOpen} > Open Modal </button>
      <Modal open={open} toggleOpen={toggleOpen} />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root0815'));
root.render(<Example />);