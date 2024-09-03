/** @format */
import Dashboard from "./pages/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
function App() {
  return (
    <div className="">
      <header className="w-full flex gap-2 h-10 bg-black text-white">
        <MenuIcon />
        Header
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
