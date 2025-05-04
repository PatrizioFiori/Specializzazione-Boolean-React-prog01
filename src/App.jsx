import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import DefaultLayout from "./layouts/DefaultLayouts";
import Error404Page from "./pages/Error404Page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/TaskList" element={<TaskList />} />
          <Route path="/AddTask" element={<AddTask />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}
