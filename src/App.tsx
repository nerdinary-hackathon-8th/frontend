import "./App.css";
import MenuFooter from "./layout/Mainlayout/MenuFooter";

function App() {
  const currentMenuIndex = 1;
    return (
        <div>
            <h1>App Page</h1>
            <MenuFooter currentMenuIndex={currentMenuIndex} />
        </div>
    );
}

export default App;
