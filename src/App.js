import Header from "./components/Header";
import Tour from "./components/tour";
import Recommend from "./components/recommend";
import Visual from "./components/visual";
import Ticket from "./components/ticket";
import Live from "./components/live";
import Book from "./components/book";
import Event from "./components/event";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Visual />
      <Recommend />
      <Tour />
      <Ticket />
      <Live />
      <Book />
      <Event />
      <footer />

      {/* <!-- footer area --> */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
