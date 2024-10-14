import Categories from "./component/Categories";
import Delivary from "./component/Delivary";
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Meal from "./component/Meal";
import NewsLetter from "./component/NewsLetter";
import TopNav from "./component/TopNav";
import TopPics from "./component/TopPics";


function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivary/>
      <TopPics/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
