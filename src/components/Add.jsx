import { useNavigate } from "react-router-dom"
import "/src/styles/Main.css"
import { useEffect,useState } from "react"

export default function Add(){
    const navigate =useNavigate()
    const [name,setName] = useState("")

    const toMain = () =>{
        navigate("/")
    }

    const toAdd = () =>{
        navigate("/Add")
    }

    const addClick = async(name)=> {
        try{
            const response = await fetch(`http://localhost:3000/films/add`,{
                method:"POST",
                headers:{ "Content-Type": "application/json"},
                body:JSON.stringify({name})
            })

            if(!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || "SignUp failed")
            }

        } catch(error){
            console.error(`Error when adding a film with name ${name}`)
        }
    }

    useEffect(()=>{
    },[])

    return(
        <div className="main-cont">
            <div className="title">
                <h1
                onClick={()=>toMain()}
                    style={{cursor:"pointer"}}>
                    Список фильмов
                </h1>
            </div>
            <input type="text" id="name" name="name" placeholder="Введите название..." minLength="1" maxLength="100" required value={name} onChange={(e) => setName(e.target.value)}/>
            <button
            onClick={()=>addClick(name)}
               style={{cursor:"pointer"}}>
               Добавить 
            </button>
        </div>
    )
}