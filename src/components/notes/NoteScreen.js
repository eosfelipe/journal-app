import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import useForm from '../../hooks/useForm'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
  const dispatch = useDispatch()
  const {active:note} = useSelector(state => state.notes)
  const [formValues, handleInputChange, reset] = useForm(note)
  const {body,title, id} = formValues

  const activeId = useRef(note.id)

  useEffect(() => {
    if(note.id !== activeId.current){
      reset(note)
      activeId.current = note.id
    }
  }, [note,reset])

  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}))
  }, [formValues, dispatch])

  const handleDelete = () => {
    dispatch(startDeleting(id))
  }

  return (
    <div className='notes__main-content'>
      <NotesAppBar />
      <div className='notes__content'>
        <input
          type='text'
          name="title"
          placeholder='Some awesome a title'
          className='notes__title-input'
          autoComplete='off'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          className='notes__textarea'
          name="body"
          placeholder='What happened today'
          value={body}
          onChange={handleInputChange}
        />
        {
          note.url && 
            <div className='notes__image'>
              <img
                src={note.url}
                alt='notes'
              />
            </div>
        }
      </div>
      <button className="btn danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default NoteScreen
