import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Chat from "./pages/Chat";
import ListBoard from "./pages/ListBoard.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list_board" element={<ListBoard />} />
        <Route
          path="/chat/:chat_id"
          element={
            <Chat
              name={"Andrew Park"}
              description={"직설적인 피드백을 통한 냉철한 조언"}
              image={"https://i.ibb.co/hFy5Cbz/2024-07-02-4-08-52.png"}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
