import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selects, setSelects] = useState([])
  const [credit, setCredit] = useState(0)
  const [remaining, setRemaining] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleSelect = (course) => {
    const isExist = selects.find(item => item.course_name === course.course_name)
    let countCredit = course.credit
    let price = course.price

    if (isExist) {
      toast.success("Already Added", {
        position: 'top-right',
        autoClose: 2000,
      });
      return
    }
    else {
      selects.forEach(course => {
        countCredit += course.credit
      })
      console.log(countCredit)
      if (countCredit > 20) {
      toast.error("You can't take upto 20 credits", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return
      }
      setCredit(countCredit)
      if (countCredit <= 20) {
        setRemaining(20 - countCredit)
      }
      setSelects([...selects, course])
      selects.forEach(course => {
        price += course.price
      })
      setTotalPrice(price)
    }
  }

  return (
    <>
      <Header></Header>
      <div className='mx-24 mt-12 pb-10 flex gap-4'>
        <Courses handleSelect={handleSelect}></Courses>
        <Sidebar credit={credit} remaining={remaining} totalPrice={totalPrice} selects={selects}></Sidebar>
        <ToastContainer></ToastContainer>
      </div>
    </>
  )
}

export default App
