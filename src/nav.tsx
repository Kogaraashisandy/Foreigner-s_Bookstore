type NavItems = { id: string; label: string };
type Navprop = { items?: NavItems[] };

export default function Nav({ items: [] }: Navprop) {
  return (
    <div>
      <h1>Foreigner's Bookstore</h1>
      <ul className="nav-list">
        {items.map((it) => (
          <li key={it.id}>{it.label}</li>
        ))}
      </ul>
    </div>
  );
}
