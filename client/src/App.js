import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import SinglePage from "./pages/singlePage/SinglePage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Posts from "./components/posts/Posts";

function App() {
  const user = false;
  return (
    <Router>
    <TopBar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/post/:postId" element={<SinglePage />} />
    <Route path="/write" element={user ? <Write/> :<Register />} />
    <Route path="/settings" element={user ? <Settings/> :<Register />} />
    <Route path="/login" element={user ? <Home/> :<Login />} />
    <Route path="/register" element={user ? <Home/> :<Register />} />
    <Route path="/posts" element={<Posts />} />
    </Routes>
    </Router>
  );
}

export default App;
