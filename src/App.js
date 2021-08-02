import "./App.css";
import GlobalNavationBar from "./components/GlobalNavagationBar";
import { exploreItems, exploreTitleItems, leftMenuItems } from "./data/data";
function App() {
  return (
    <>
      <GlobalNavationBar
        exploreItems={exploreItems}
        exploreTitleItems={exploreTitleItems}
        leftMenuItems={leftMenuItems}
      ></GlobalNavationBar>
      <div id="junk">a</div>
    </>
  );
}

export default App;
