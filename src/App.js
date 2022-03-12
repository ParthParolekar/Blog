import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Blogs />
    </div>
  );
}
