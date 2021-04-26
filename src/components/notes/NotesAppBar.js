import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

const NotesAppBar = () => {
  const dispatch = useDispatch()
  const {active} = useSelector(state => state.notes)
  const handleSave = () => {
    dispatch(startSaveNote(active))
  }
  return (
    <div className='notes__appbar'>
      <span>28 agosto 2021</span>
      <div>
        <button className='btn primary'>Picture</button>
        <button className='btn primary' onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default NotesAppBar
