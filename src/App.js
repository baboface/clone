import { HelmetProvider } from "react-helmet-async";
import { Home } from "./components/home/Home";
import { Menu } from "./components/Menu";
import { NotFound } from "./components/NotFound";
import { Product } from "./components/pages/Product";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyled } from "./styles/globalStyled";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
