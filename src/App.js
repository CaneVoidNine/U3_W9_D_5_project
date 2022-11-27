import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyTitle from "./components/MyTitle";
import MyFooter from "./components/MyFooter";
import SingleCarousel from "./components/SingleCarousel";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "white",
        height: "100%",
      }}
    >
      <MyNavbar />
      <MyTitle />
      <SingleCarousel search="Action" />
      <SingleCarousel search="Anime" />
      <SingleCarousel search="Horror" />
      <MyFooter />
    </div>
  );
}

export default App;
