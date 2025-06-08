import Link from "next/link";
import { getCursos, formatarTempo } from "@/services/cursos";

const CursosPage = async () => {
  try {
    const cursos = await getCursos();

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Nossos Cursos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((curso) => (
            <Link
              key={curso.id}
              href={`/cursos/${curso.slug}`}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {curso.nome}
                </h2>

                <p className="text-gray-600 dark:text-gray-300">
                  {curso.descricao}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{curso.total_aulas} aulas</span>
                  <span>{formatarTempo(curso.total_horas * 60)}</span>
                </div>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    Ver curso →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Erro ao carregar cursos
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Não foi possível carregar a lista de cursos. Tente novamente mais
            tarde.
          </p>
        </div>
      </div>
    );
  }
};

export default CursosPage;
