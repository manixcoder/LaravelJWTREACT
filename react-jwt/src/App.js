import "bootstrap/dist/css/bootstrap.min.css";

import AuthUser from './Components/AuthUser';
import Guest from './Navbar/Guest';
import Auth from "./Navbar/Auth";

function App() {
  const { getToken } = AuthUser();

  if (!getToken()) {
    return <Guest />
  }
  return (
    <>
      <Auth />
    </>

  );
}

export default App;
