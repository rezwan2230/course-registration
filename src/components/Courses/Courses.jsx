import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className="w-3/4">
            {/* <h1>course : {courses.length}</h1> */}
            <div className="grid grid-cols-3 gap-8">
            {
                courses.map((course, index)=><Course key={index} course={course}></Course>)
            }
            </div>

        </div>
    );
};

export default Courses;