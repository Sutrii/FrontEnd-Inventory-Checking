import { Link, Route } from "react-router-dom"

import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register";

function App() {

  return (
      <div className="bg-slate-100">
          <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
            <div
              className="container mx-auto flex flex-wrap items-center justify-between"
              bis_skin_checked="1"
            >
              <a href="https://laraveller.com/" className="flex items-center">
                Laraveller
              </a>
              <div
              >
                <ul
                  className="
                    mt-4
                    flex flex-col
                    rounded-lg
                    p-4
                    md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
                  "
                >
                  <li>
                    <Link
                      to="/"
                      className="block rounded py-2 pr-4 pl-3 text-white"
                      aria-current="page"
                      >Home</Link>
                  </li>
                  <li>
                    <Link
                      to="/Login"
                      className="block rounded py-2 pr-4 pl-3 text-white"
                      aria-current="page"
                      >Login</Link>
                  </li>
                  <li>
                    <Link
                      to="/Register"
                      className="block rounded py-2 pr-4 pl-3 text-white"
                      aria-current="page"
                      >Register</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="max-w-7xl mx-auto mt-6">
            <Route>
              
            </Route>
          </div>
      </div>
  );
}

export default App;
