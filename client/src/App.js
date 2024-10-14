import Delivary from "./component/Delivary";
import Featured from "./component/Featured";
import TopNav from "./component/TopNav";
import TopPics from "./component/TopPics";


function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivary/>
      <TopPics/>
    </div>
  );
}

export default App;
