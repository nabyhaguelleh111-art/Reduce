import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, editTask } from '../features/todos/todosSlice'

function Task({ task }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(task.description)

  const handleSave = () => {
    const trimmed = draft.trim()
    if (!trimmed) return
    dispatch(editTask({ id: task.id, description: trimmed }))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setDraft(task.description)
    setIsEditing(false)
  }

  return (
    <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            style={{ flex: 1, padding: '4px' }}
          />
          <button onClick={handleSave}>Sauvegarder</button>
          <button onClick={handleCancel}>Annuler</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.isDone ? 'line-through' : 'none',
              flex: 1,
            }}
          >
            {task.description}
          </span>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        </>
      )}
    </div>
  )
}

export default Task
