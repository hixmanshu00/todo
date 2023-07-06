'use client'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { useState, FormEventHandler } from 'react'
import { addTodo } from '@/api'

const AddTask = () => {
  const [modelOpen, setModelOpen] = useState<boolean>(false)
  const [newTask, setNewTask] = useState<string>('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addTodo
    setNewTask("")
  }
  return (
    <div>
      <button className="btn btn-primary w-full" onClick={() => setModelOpen(true)}>Add New Task <AiOutlinePlus className='bg-primary ml-2' size={16} /></button>
      <Modal modelOpen={modelOpen} setModelOpen={setModelOpen}>
        <form onSubmit={handleSubmit} >
          <h3 className="font-bold text-lg">Add new tasks</h3>
          <div className="model-action">
            <input value={newTask} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e) => setNewTask(e.target.value)} />              <button className="btn btn-neutral" type='submit'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask