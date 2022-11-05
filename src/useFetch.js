import { useState, useEffect } from "react"
const useFetch = () => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    const clickMe = (id)=> {
        const newBlog = blogs.filter( blog => blog.id !== id)
        return setBlogs(newBlog)
    }

    //useEffect
    useEffect( _=>{
        fetch("http://localhost:8000/blogs")
            .then( res => res.json())
            .then( data => {
                setBlogs(data)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
    })

    return { blogs, loading, clickMe}
}

export default useFetch