// 練習區塊ㄧ
function formatName() {
  return user.firstName + user.lastName + '是一位' + user.description;
}
// 區塊結束

const user = {
  firstName: 'Candy',
  lastName: 'Wang',
  description: '前端工程師'
};
// 練習區塊二
const element = (
  <h2>
    {formatName(user)}
  </h2>
);
// 區塊結束
const root = ReactDOM.createRoot(document.getElementById('root0801'));
root.render(element);
