import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Curso não encontrado
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          O curso que você está procurando não existe ou foi removido.
        </p>
        <Link
          href="/cursos"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ver todos os cursos
        </Link>
      </div>
    </div>
  );
}
