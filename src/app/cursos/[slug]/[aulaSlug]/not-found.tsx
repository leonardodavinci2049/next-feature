import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Aula não encontrada
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          A aula que você está procurando não existe ou foi removida.
        </p>
        <div className="space-y-3">
          <Link
            href="/cursos"
            className="block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver todos os cursos
          </Link>
          <button
            onClick={() => window.history.back()}
            className="block w-full px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
