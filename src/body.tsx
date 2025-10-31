// Tipos para los datos
type Novel = {
  id: number;
  title: string;
  image: string;
  genre: string;
  chapters: number;
  addedTime: string;
  status: "ongoing" | "completed";
};

type RankingItem = {
  id: number;
  rank: number;
  title: string;
  image: string;
  views: number;
  rating: number;
};

type RecentUpdate = {
  id: number;
  title: string;
  chapter: number;
  chapterTitle: string;
  time: string;
  image: string;
};

type MainBodyProps = {
  newNovels?: Novel[];
  ranking?: RankingItem[];
  recentUpdates?: RecentUpdate[];
  randomNovels?: Novel[];
};

export default function MainBody({
  newNovels = [],
  ranking = [],
  recentUpdates = [],
  randomNovels = [],
}: MainBodyProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna Principal - Izquierda (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sección: Nuevas Novelas */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Nuevas Novelas
              </h3>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver Más →
              </a>
            </div>
            <hr className="mb-4 border-gray-200" />

            {/* Grid de Novelas */}
            {newNovels.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {newNovels.map((novel) => (
                  <div key={novel.id} className="group cursor-pointer">
                    <div className="relative mb-2 overflow-hidden rounded-lg">
                      <img
                        src={novel.image}
                        alt={novel.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        {novel.status === "ongoing" ? "En curso" : "Completa"}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600">
                      {novel.title}
                    </h4>
                    <div className="flex justify-between text-xs text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {novel.genre}
                      </span>
                      <span>{novel.chapters} Ch</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {novel.addedTime}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No hay novelas nuevas disponibles</p>
              </div>
            )}
          </div>

          {/* Sección: Actualizaciones Recientes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Actualizaciones Recientes
            </h3>
            <hr className="mb-4 border-gray-200" />

            {recentUpdates.length > 0 ? (
              <>
                <div className="space-y-4">
                  {recentUpdates.map((update) => (
                    <div
                      key={update.id}
                      className="flex gap-4 hover:bg-gray-50 p-2 rounded transition"
                    >
                      <img
                        src={update.image}
                        alt={update.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer mb-1">
                          {update.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium">#{update.chapter}</span>{" "}
                          {update.chapterTitle}
                        </p>
                        <p className="text-xs text-gray-500">{update.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm font-medium">
                  Cargar Más
                </button>
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No hay actualizaciones recientes</p>
              </div>
            )}
          </div>
        </div>

        {/* Columna Sidebar - Derecha (1/3) */}
        <div className="space-y-6">
          {/* Sección: Ranking */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Ranking</h3>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver Más →
              </a>
            </div>
            <hr className="mb-4 border-gray-200" />

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">
                Diario
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium hover:bg-gray-200">
                Semanal
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium hover:bg-gray-200">
                Mensual
              </button>
            </div>

            {/* Lista de Ranking */}
            {ranking.length > 0 ? (
              <div className="space-y-4">
                {ranking.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 hover:bg-gray-50 p-2 rounded transition"
                  >
                    <div className="flex-shrink-0">
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded font-bold text-white ${
                          item.rank === 1
                            ? "bg-yellow-500"
                            : item.rank === 2
                              ? "bg-gray-400"
                              : "bg-orange-600"
                        }`}
                      >
                        {item.rank}
                      </span>
                    </div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-20 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-gray-800 mb-1 truncate hover:text-blue-600 cursor-pointer">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span>👁️ {item.views.toLocaleString()}</span>
                        <span className="text-yellow-500">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No hay datos de ranking</p>
              </div>
            )}
          </div>

          {/* Sección: Novelas Aleatorias */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Novelas Aleatorias
            </h3>
            <hr className="mb-4 border-gray-200" />

            {randomNovels.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {randomNovels.map((novel) => (
                  <div key={novel.id} className="group cursor-pointer">
                    <div className="relative mb-2 overflow-hidden rounded">
                      <img
                        src={novel.image}
                        alt={novel.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="text-xs font-medium text-gray-800 line-clamp-2">
                      {novel.title}
                    </h4>
                    <span className="text-xs text-gray-500">{novel.genre}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No hay novelas aleatorias</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
