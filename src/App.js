import "../src/styles/HomeContainer.css";
import AppRoot from "./AppRoot/AppRoot";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    </Provider>
    
  )
}

export default App;
