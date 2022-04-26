import "./App.css";
import { UserContextProvider } from "./userContext";
import Page from "./Page";

function App() {
  return (
    <UserContextProvider>
      <Page />
    </UserContextProvider>
  );
}

export default App;
