import Nav from "../nav";
import MainBody from "../body";
import Footer from "../footer";

export default function Home() {
  const navItems = [
    { id: "home", label: "Inicio", path: "/" },
    { id: "books", label: "Novelas", path: "/novelas" },
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
    {
      id: 2,
      title: "After Stockpiling Supplies",
      image: "https://via.placeholder.com/200x300",
      genre: "adventure",
      chapters: 170,
      addedTime: "hace 8 minutos",
      status: "completed" as const,
    },
    {
      id: 3,
      title: "The Fantastic Journey",
      image: "https://via.placeholder.com/200x300",
      genre: "fantasy",
      chapters: 784,
      addedTime: "hace 9 minutos",
      status: "ongoing" as const,
    },
    {
      id: 4,
      title: "Apocalypse Resort",
      image: "https://via.placeholder.com/200x300",
      genre: "sci-fi",
      chapters: 181,
      addedTime: "hace 10 minutos",
      status: "completed" as const,
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
    {
      id: 2,
      rank: 2,
      title: "Devour: I Can Copy",
      image: "https://via.placeholder.com/100x150",
      views: 36654,
      rating: 4.8,
    },
    {
      id: 3,
      rank: 3,
      title: "Zongman: From Gurefia",
      image: "https://via.placeholder.com/100x150",
      views: 32061,
      rating: 3.3,
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
    {
      id: 2,
      title: "Douluo: The Phoenix God",
      chapter: 642,
      chapterTitle: "Slay the Deep Sea",
      time: "hace 2 minutos",
      image: "https://via.placeholder.com/100x150",
    },
    {
      id: 3,
      title: "One Person: Thunder Magic",
      chapter: 200,
      chapterTitle: "The Old Master's Phone",
      time: "hace 7 minutos",
      image: "https://via.placeholder.com/100x150",
    },
  ];

  const randomNovels = newNovels.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Nav items={navItems} />
      <MainBody
        newNovels={newNovels}
        ranking={ranking}
        recentUpdates={recentUpdates}
        randomNovels={randomNovels}
      />
      <Footer />
    </div>
  );
}
