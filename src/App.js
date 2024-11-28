import './App.css';
import DataFetchingComponent from "./async"

function App() {
  // 변수를 가져와서 서버에서 가져온 척하기
  let post = "강남 우동 맛집";
  

  return (
    <div className="App">
      <div className = 'black-nav'>
        <h4>이가영의 블로그</h4>
      </div>
      <h4>{post}</h4> {/*변수명을 꽂을땐 중괄호 _ 데이터바인딩*/}
      <h4 style = {{color: 'red', fontSize:'16px'}}>스타일을 입혔습니다</h4>
      <DataFetchingComponent/>
    </div>
  );
}

export default App;
