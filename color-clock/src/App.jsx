import { format } from 'date-fns'

function App() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '150px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: 'purple' }}>
        Color Clock
      </h1>

      <p
        style={{
          fontSize: '28px',
          color: 'teal',
          fontWeight: 'bold',
        }}
      >
        {format(new Date(), 'MMMM d, yyyy h:mm:ss a')}
      </p>
    </div>
  )
}

export default App