import axios from "axios";
import "./App.css";

function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Fetch Data</button>
    </div>
  );
}

export default App;
