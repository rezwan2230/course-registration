import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const [selects, setSelects] = useState([])

  const handleSelect = (course)=>{
    console.log(course)
    
    const isExist = selects.find(item=>item.course_name === course.course_name)
    if(isExist){
      return alert("Already Added")
    }
    else{
      setSelects([...selects, course])
    }
  }

  return (
    <>
      <Header></Header>
      <div className='mx-24 mt-12 pb-10 flex gap-4'>
        <Courses handleSelect= {handleSelect}></Courses>
        <Sidebar></Sidebar>

      </div>
    </>
  )
}

export default App
