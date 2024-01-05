import { useEffect, useState } from "react";


const UseMenu = () => {
    const [menu,setMenu] =useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://brandshop-server-miwq8mlu8-munas-projects.vercel.app/cart')
        .then(res => res.json())
        .then(data =>{
            setMenu(data)
            setLoading(false)
        })
    },[])
    return [menu,loading]
};

export default UseMenu;