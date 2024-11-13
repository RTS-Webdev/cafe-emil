import Navbar from "./components/Navbar";
import Images from "./components/ui/Images";
import Menu from "./components/Menu";
import Bordbestilling from "./components/Bordbestilling";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Images />
      <Menu />
      <Bordbestilling />
      <FindUs />
      <Footer />
    </>
  );
}
