import React from 'react';

function Downloads() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Downloads</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for download items */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Documentos</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Documentos importantes e formulários para download.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Downloads;