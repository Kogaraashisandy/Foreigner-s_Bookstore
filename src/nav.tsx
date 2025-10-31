import { Link } from "react-router-dom";
import MyBotoncito from "./buttonp";
import Hambur from "./assets/icon-hambur.png";
import Chad from "./assets/portail.jpg";

type NavItems = { id: string; label: string; path: string };
type Navprop = { items?: NavItems[] };

export default function Nav({ items = [] }: Navprop) {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex items-center gap-4">
        <MyBotoncito>
          <img src={Hambur} alt="Menu" className="w-6 h-6" />
        </MyBotoncito>

        <Link to="/">
          <h1 className="text-xl font-bold">Foreigner's Bookstore</h1>
        </Link>

        <ul className="flex gap-6 ml-auto">
          {items.map((it) => (
            <li key={it.id}>
              <Link to={it.path} className="hover:text-blue-400">
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        <img className="w-10 h-10 rounded-sm" src={Chad} alt="Avatar" />

        <Link to="/login">
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Iniciar sesión
          </button>
        </Link>
      </div>
    </nav>
  );
}
