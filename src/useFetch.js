import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    //useEffect
    useEffect( _=>{
        fetch(url)
            .then( res => res.json())
            .then( data => {
                setBlogs(data)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
    })

    return { blogs, loading }
}

export default useFetch