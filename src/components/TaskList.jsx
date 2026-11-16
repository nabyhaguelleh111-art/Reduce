import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../features/todos/todosSlice'
import Task from './Task.jsx'

function TaskList() {
  const dispatch = useDispatch()
  const { items, filter } = useSelector((state) => state.todos)

  const filteredTasks = items.filter((task) => {
    if (filter === 'done') return task.isDone
    if (filter === 'not') return !task.isDone
    return true
  })

  return (
    <div>
      <div style={{ margin: '12px 0', display: 'flex', gap: '8px' }}>
        <button onClick={() => dispatch(setFilter('all'))} disabled={filter === 'all'}>
          Toutes
        </button>
        <button onClick={() => dispatch(setFilter('done'))} disabled={filter === 'done'}>
          Faites
        </button>
        <button onClick={() => dispatch(setFilter('not'))} disabled={filter === 'not'}>
          Pas faites
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>Aucune tâche.</p>
      ) : (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  )
}

export default TaskList
