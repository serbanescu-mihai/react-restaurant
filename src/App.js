import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Wine from "./components/wine/Wine";
import Book from "./components/book/Book";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Menu />
        <Wine />
        <Book />
        <Contact />
      </main>
    </>
  );
}

export default App;
