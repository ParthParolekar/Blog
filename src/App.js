import Create from "./components/Create/Create";
import { Blogs, Navbar } from "./components/index";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Create />
      <Blogs />
    </div>
  );
}
