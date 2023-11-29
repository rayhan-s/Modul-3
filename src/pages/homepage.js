import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Page = () => {
    return (
      <div>
        <Hero />
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  };