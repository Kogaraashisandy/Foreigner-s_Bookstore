import MyBotoncito from "./buttonp.tsx";
import "./index.css";
import Hambur from "./assets/icon-hambur.png";
import Chad from "./assets/portail.jpg";
import Botoncito from "./buttonp.tsx";

type NavItems = { id: string; label: string };
type Navprop = { items?: NavItems[] };

export default function Nav({ items = [] }: Navprop) {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex items-center gap-4">
        {/* Botón hamburguesa */}
        <MyBotoncito>
          <img src={Hambur} alt="Menu" className="w-6 h-6" />
        </MyBotoncito>

        {/* Título */}
        <h1 className="text-xl font-bold">Foreigner's Bookstore</h1>

        {/* Menu items */}
        <ul className="flex gap-6 ml-auto">
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className="hover:text-blue-400">
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <img className="w-10 h-10 rounded-sm" src={Chad} alt="Default avatar" />
        <Botoncito title="iniciar seccion">iniciar seccion</Botoncito>
      </div>
    </nav>
  );
}
