import Auth from "./components/Auth";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const authToken = true;
  return (
    <div className="app-container">
      {!authToken && <Auth/>}
      {authToken && <Dashboard/>}
    </div>
  )
}

export default App;