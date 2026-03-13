import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Identity from "./pages/identity";
import Task from "./pages/task";
import Layout from "./components/layout";
import { Dashboard } from "./pages/main";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/tasks" element={<Task />} />
          <Route path="/planner" element={<Identity />} />
          <Route path="/settings" element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
