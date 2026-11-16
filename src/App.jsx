import AddTask from './components/AddTask.jsx'
import TaskList from './components/TaskList.jsx'

function App() {
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Todo App (Redux + Vite)</h1>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
