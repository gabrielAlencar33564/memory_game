import { Provider } from "react-redux";
import { store } from "./store";
import { RoutesPage } from "./routes";
import "./style/global.css";
import "./style/reset.css";

function App() {
  return (
    <Provider store={store}>
      <RoutesPage />
    </Provider>
  );
}

export default App;
