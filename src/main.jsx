
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Router from "./Routes";
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop />
    <Router />
  </BrowserRouter>
);