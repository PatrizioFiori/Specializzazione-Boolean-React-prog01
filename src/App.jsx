import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import DefaultLayout from "./layouts/DefaultLayouts";
import Error404Page from "./pages/Error404Page";
import TaskDetail from "./pages/TaskDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/TaskList" element={<TaskList />} />
          <Route path="/AddTask" element={<AddTask />} />
          <Route path="/TaskDetail/:id" element={<TaskDetail />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}
