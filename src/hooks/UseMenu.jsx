import { useEffect, useState } from "react";

const UseMenu = ()=>{

    const [categories, setCategories] = useState([])
    const [loading,setLoading ] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoading(false)
            })
            .catch(error => console.error(error))

    }, [])
    return[categories,loading]

}


export default UseMenu;