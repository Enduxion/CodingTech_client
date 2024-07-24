import axios from "axios";
import { useState } from "react"

export default function AddCourse() {
  const [data, setData] = useState({
    name: "",
    description: "",
    duration: "",
    img: "",
  });
  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () => {
    axios.post("https://codingtech.onrender.com/api/courses/post_course", data).then((res) => {
      console.log(res.data)
      setData({ name: "", description: "", duration: "", img: "" });
    });
  }
  return (
    <div className="my-nav w-full flex flex-col px-16 gap-4 items-center">
      <span className="text-xl font-bold font-roboto mt-4">Form</span>

      <input value={data.name} name="name" className="border-2 h-10 border-gray-600 w-1/2 text-center placeholder:text-primary placeholder:opacity-80" placeholder="name" type="text" onChange={handleChange} />

      <input value={data.description} name="description" className="border-2 h-10 border-gray-600 w-1/2 text-center placeholder:text-primary placeholder:opacity-80" placeholder="description" type="text" onChange={handleChange} />

      <input value={data.duration} name="duration" className="border-2 h-10 border-gray-600 w-1/2 text-center placeholder:text-primary placeholder:opacity-80" placeholder="duration" type="text" onChange={handleChange} />

      <input value={data.img} name="img" className="border-2 h-10 border-gray-600 w-1/2 text-center placeholder:text-primary placeholder:opacity-80" placeholder="img" type="text" onChange={handleChange} />

      <button onClick={handleSubmit} className="bg-primary text-white bg-opacity-50 w-fit px-4 py-2">Submit</button>
    </div>
  )
}