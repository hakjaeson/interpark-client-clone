import Header from "./components/Header";
import Recommend from "./components/recommend";
import Visual from "./components/visual";

function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <!-- section area --> */}
      <div className="content"></div>
      <Visual />
      <Recommend />

      {/* <!-- footer area --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
