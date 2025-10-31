import { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";

export default function Novelas() {
  const navItems = [
    { id: "home", label: "Inicio", path: "/" },
    { id: "books", label: "Novelas", path: "/novelas" },
  ];

  // Datos de ejemplo
  const allNovels = [
    {
      id: 1,
      title: "Power of Azeroth",
      image: "https://via.placeholder.com/200x300",
      genre: "action",
      chapters: 886,
      status: "ongoing" as const,
      rating: 4.5,
      description: "Una épica historia de acción y aventura.",
    },
    {
      id: 2,
      title: "After Stockpiling Supplies",
      image: "https://via.placeholder.com/200x300",
      genre: "adventure",
      chapters: 170,
      status: "completed" as const,
      rating: 4.2,
      description: "Sobreviviendo al apocalipsis con ingenio.",
    },
    {
      id: 3,
      title: "The Fantastic Journey",
      image: "https://via.placeholder.com/200x300",
      genre: "fantasy",
      chapters: 784,
      status: "ongoing" as const,
      rating: 4.8,
      description: "Un viaje mágico sin igual.",
    },
    {
      id: 4,
      title: "Apocalypse Resort",
      image: "https://via.placeholder.com/200x300",
      genre: "sci-fi",
      chapters: 181,
      status: "completed" as const,
      rating: 3.9,
      description: "El último refugio de la humanidad.",
    },
    {
      id: 5,
      title: "Mystic Romance",
      image: "https://via.placeholder.com/200x300",
      genre: "romance",
      chapters: 250,
      status: "ongoing" as const,
      rating: 4.6,
      description: "Amor en tiempos místicos.",
    },
    {
      id: 6,
      title: "Horror Night",
      image: "https://via.placeholder.com/200x300",
      genre: "horror",
      chapters: 120,
      status: "completed" as const,
      rating: 4.1,
      description: "Terror que no te dejará dormir.",
    },
  ];

  // Estados para filtros
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filtrar novelas
  const filteredNovels = allNovels.filter((novel) => {
    const matchGenre = selectedGenre === "all" || novel.genre === selectedGenre;
    const matchStatus =
      selectedStatus === "all" || novel.status === selectedStatus;
    const matchSearch = novel.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchGenre && matchStatus && matchSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Nav items={navItems} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Todas las Novelas
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* SIDEBAR IZQUIERDO - Filtros */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Filtros</h3>

              {/* Búsqueda */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar
                </label>
                <input
                  type="text"
                  placeholder="Nombre de la novela..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Género */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Género
                </label>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Todos</option>
                  <option value="action">Acción</option>
                  <option value="adventure">Aventura</option>
                  <option value="fantasy">Fantasía</option>
                  <option value="sci-fi">Ciencia Ficción</option>
                  <option value="romance">Romance</option>
                  <option value="horror">Horror</option>
                </select>
              </div>

              {/* Estado */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estado
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Todos</option>
                  <option value="ongoing">En curso</option>
                  <option value="completed">Completada</option>
                </select>
              </div>

              {/* Botón Limpiar */}
              <button
                onClick={() => {
                  setSelectedGenre("all");
                  setSelectedStatus("all");
                  setSearchTerm("");
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded-lg transition"
              >
                Limpiar Filtros
              </button>
            </div>
          </div>

          {/* CONTENIDO DERECHO - Grid de Novelas */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-gray-600">
              Mostrando {filteredNovels.length} de {allNovels.length} novelas
            </div>

            {filteredNovels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredNovels.map((novel) => (
                  <div
                    key={novel.id}
                    className="bg-white rounded-lg shadow hover:shadow-xl transition group"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={novel.image}
                        alt={novel.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {novel.status === "ongoing" ? "En curso" : "Completa"}
                      </span>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                        {novel.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {novel.description}
                      </p>

                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="bg-gray-100 px-3 py-1 rounded text-gray-700">
                          {novel.genre}
                        </span>
                        <span className="text-yellow-500 font-medium">
                          ★ {novel.rating}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {novel.chapters} Capítulos
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition">
                          Leer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No se encontraron novelas con estos filtros
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
