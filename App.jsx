
import { useState } from 'react'

export default function App() {
  const [materia, setMateria] = useState(null)
  const materias = [
    "História", "Geografia", "Química", "Física", "Matemática",
    "Português", "Inglês", "Espanhol", "Educação Física",
    "Biologia", "Filosofia", "Sociologia", "Arte"
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {!materia ? (
        <div className="max-w-xl mx-auto text-center mt-10">
          <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Chat Professor 👨‍🏫</h1>
          <p className="mb-6">Qual matéria você deseja visitar hoje?</p>
          <div className="grid grid-cols-2 gap-4">
            {materias.map((mat, idx) => (
              <button key={idx} onClick={() => setMateria(mat)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                {mat}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto mt-6">
          <button onClick={() => setMateria(null)} className="text-blue-500 underline mb-4">← Voltar</button>
          <h2 className="text-2xl font-semibold mb-2">{materia}</h2>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">Chat simulando explicações sobre <strong>{materia}</strong>.</p>
          </div>
        </div>
      )}
    </div>
  )
}
