import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import BlogDetail from './components/Blogs/Blog_detail'
import Projects from './components/Projects/Projects'
import Detail from './components/Projects/Project_detail'

export default function App() {
  return (
    <Router>
      <div className="main-content">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project_detail/:projectId" element={<Detail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog_detail/:blogId" element={<BlogDetail />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}