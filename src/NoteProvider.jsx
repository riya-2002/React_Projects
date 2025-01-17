import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import {v4 as uuidv4} from 'uuid'

export let NoteContext = createContext()

const NoteProvider = (props) => {
    let [state,setState] = useState({
        title:"",
        desciption: "",
        category:""
    })

    let getLocalItems = () =>{
        let lists = localStorage.getItem("lists")
        if(lists){
            return JSON.parse(lists)
        }
        else{
            return []
        }
    }
    
    let [task,setTask] = useState(getLocalItems())

    const addTask = (title, description, category)=>{
        setTask([...task,{title,description,category, id:uuidv4()}])
    }

    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(task))
    },[task]) 

    let [selective, setSelective] = useState({
        selectedCategory : "All"
    })

    let handleChange = (e) =>{
        let {name, value} = e.target
        setSelective({[name]:value})
    }

    let handleDelete = (x) => {
        let filteredItem = task.filter(item => item.id !=x)
        setTask(filteredItem)
    }

    let handleupdate = (y) =>{
        let remainingItems = task.filter(item => item.id !=y)
        let editItem = task.find(item => item.id ==y)
        setTask(remainingItems)
        setState(editItem)
    }

  return (
    <div>
        <NoteContext.Provider value={{state,setState,addTask,task, selective, handleChange, handleDelete, handleupdate}}>
            {props.children}
        </NoteContext.Provider>
      
    </div>
  )
}

export default NoteProvider
