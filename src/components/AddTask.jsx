import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/todos/todosSlice'

function AddTask() {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = description.trim()
    if (!trimmed) return

    dispatch(addTask(trimmed))
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '8px', width: '70%', marginRight: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Ajouter</button>
    </form>
  )
}

export default AddTask
