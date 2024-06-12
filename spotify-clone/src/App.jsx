import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Topartist from "./pages/Topartist";
import Topchart from "./pages/Topchart";
import Aroundyou from "./pages/Aroundyou";
import Artistdetails from "./pages/Artistdetails";
import Songdetails from "./pages/Songdetails";
import Search from "./pages/Search";
import Topplay from "./components/Topplay";
function App() {
  return (
    <div className="relative flex">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />
        <div className="px-6  h-[calc(100vh-72px)]  overflow-y-scroll hide-y-scrollbar flex xl:flex-row flex-col-reverse">
          <div className=" flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<Topartist />} />
              <Route path="/top-charts" element={<Topchart />} />
              <Route path="/around-you" element={<Aroundyou />} />
              <Route path="/artist/:id" element={<Artistdetails />} />
              <Route path="/songs/:songid" element={<Songdetails />} />
              <Route path="/search/:serchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <Topplay />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
