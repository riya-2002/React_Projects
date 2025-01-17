import './App.css'
import DisplayNotes from './DisplayNotes'
import Navbar from './Navbar'
import NoteForm from './NoteForm'
import NoteProvider from './NoteProvider'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <NoteProvider>
      <main className="maincont">
        <NoteForm></NoteForm>
        <DisplayNotes></DisplayNotes>
      </main>
    </NoteProvider>
    </>
  )
}

export default App
