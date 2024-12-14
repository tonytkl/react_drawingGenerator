import useWindowDimensions from "./hooks/useWindowDimensions";
import Error from "./pages/error";
import Home from "./pages/home";

function App() {
  const { width } = useWindowDimensions();

  if (width < 1920) {
    return <Error />;
  } else {
    return <Home />;
  }
}

export default App;
