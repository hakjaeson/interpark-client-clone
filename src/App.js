import Header from "./components/Header";
import Tour from "./components/tour";
import Recommend from "./components/recommend";
import Visual from "./components/visual";
import Ticket from "./components/ticket";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Visual />
      <Recommend />
      <Tour />
      <Ticket />

      {/* <!-- footer area --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
