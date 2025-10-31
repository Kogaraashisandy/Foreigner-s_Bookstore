import Nav from "./nav.tsx";
import MainBody from "./body.tsx";
import Footer from "./footer.tsx";
import "./index.css";

export default function MyApp() {
  const items = [
    { id: "home", label: "Inicio" },
    { id: "books", label: "Novelas" },
    { id: "contact", label: "Contacto" },
  ];

  // Datos de ejemplo
  const newNovels = [
    {
      id: 1,
      title: "Power of Azeroth",
      image: "https://via.placeholder.com/200x300",
      genre: "action",
      chapters: 886,
      addedTime: "hace 4 minutos",
      status: "ongoing" as const,
    },
  ];

  const ranking = [
    {
      id: 1,
      rank: 1,
      title: "High Martial Arts",
      image: "https://via.placeholder.com/100x150",
      views: 47983,
      rating: 2.3,
    },
  ];

  const recentUpdates = [
    {
      id: 1,
      title: "Heroes of Might",
      chapter: 465,
      chapterTitle: "Status",
      time: "hace 2 minutos",
      image: "https://via.placeholder.com/100x150",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Nav items={items} />
      <MainBody
        newNovels={newNovels}
        ranking={ranking}
        recentUpdates={recentUpdates}
        randomNovels={newNovels.slice(0, 4)}
      />
      <Footer />
    </div>
  );
}
