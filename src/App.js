import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyTitle from "./components/MyTitle";
import SingleCarousel from "./components/SingleCarousel";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "white",
        height: "120vh",
      }}
    >
      <MyNavbar />
      <MyTitle />
      <SingleCarousel />
      <MyFooter />
    </div>
  );
}

export default App;
