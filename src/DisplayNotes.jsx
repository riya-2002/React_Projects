import React, { useContext } from 'react'
import { NoteContext } from './NoteProvider'

const DisplayNotes = () => {
  let data = useContext(NoteContext)
  console.log(data)
  let {task} = data
  console.log(task)
   return (
    <div className='notes_display_hero'>
      <h1>Notes</h1>
      <div  className='radio_cont' name="selectedCategory" value={data.selective} onChange={data.handleChange}>
        <label >Select a category</label>
        <input name='selectedCategory'  defaultChecked type='radio' value="All"></input>
        <span>All</span>
        <input name='selectedCategory' type='radio' value="General"></input>
        <span>General</span>
        <input name='selectedCategory' type='radio' value="Technical"></input>
        <span>Technical</span>
        <input name='selectedCategory' type='radio' value="Expenses"></input>
        <span>Expenses</span>
      </div>
      {
        task.length === 0 ? <h1>No Notes....</h1> :  task.map((item)=>{
          if ( data.selective.selectedCategory=="All" || item.category == data.selective.selectedCategory){
          return(
            <div className='notes_display' key={item.id}>
              <h2>{item.title}</h2>
              <h4>Category : ****{item.category}****</h4>
              <br></br>
              <p>Description</p>
              <br></br>
              <p>{item.description}</p>
              <span onClick={()=>data.handleDelete(item.id)}>Delete</span>
              <span onClick={()=>data.handleupdate(item.id)}>Edit</span>
            </div>
          )}
        })
      }
      
    </div>
  )
}

export default DisplayNotes
