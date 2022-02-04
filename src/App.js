import {MainPage} from "./page/MainPage";
import {GetBlogs} from "./context/ApiContext";
import './App.css';


function App() {
  return (
      <GetBlogs>
          <MainPage />
      </GetBlogs>
  );
}

export default App;
