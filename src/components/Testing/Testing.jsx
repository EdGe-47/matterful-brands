import { useRef, useState } from 'react'

function Testing() {
  const [ count, setCount ] = useState(0)
  const connectionRef = useRef(null)

  if (connectionRef.current === null) {
    connectionRef.current = createConnection()
  }

  function createConnection() {
    console.log("📡 Создание подключения...");
    return { id: Math.random() };
  }

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Rerender ({count})
      </button>
      <p>ID подключения: {connectionRef.current.id}</p>
    </div>
  )
}

export default Testing