import { useState } from "react";

import Nav from "./nav.tsx";

type NavItem = { id: string; label: string };

type HeaderProps = { items: NavItem[] };

export default function Header({ items }: HeaderProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="site-header">
      <button
        className="menu-btn"
        aria-controls="main-nav"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        ☰
      </button>

      <div id="main-nav" className={`nav ${open ? "open" : "closed"}`}>
        <Nav items={items} />
      </div>
    </header>
  );
}
