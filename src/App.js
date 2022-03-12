import Navbar from "./components/Navbar/Navbar";
import "./styles.css";

export default function App() {
  const blogs = [
    {
      name: "Blog 1",
      author: "Parth",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum risus diam, quis semper dolor consectetur sed. In sodales ac est eget pretium. Maecenas volutpat convallis ex quis laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse iaculis consequat suscipit. Curabitur aliquam sapien et faucibus varius. In eget dolor vel arcu tempus cursus ac nec augue. Nunc id ligula eu massa sagittis dignissim vel sit amet nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec cursus rhoncus imperdiet. Mauris volutpat congue sem a blandit. Donec id urna efficitur ligula.",
      liked: false
    }
  ];

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
