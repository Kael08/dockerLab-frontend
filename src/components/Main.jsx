import { useNavigate } from "react-router-dom"
import "/src/styles/Main.css"
import { useEffect,useState } from "react"

export default function Main(){
    const [films,setFilms] = useState([])
    const navigate = useNavigate()

    const fetchFilms = async() => {
        try {
            const response = await fetch("http://localhost/api/films/")
            const data = await response.json()
            console.log(data)
            setFilms(data)
        } catch(error){
            console.error("Ошибка при загрузке данных:",error)
        }
    }

    const toMain = () =>{
        navigate("/")
    }

    const toAdd = () =>{
        navigate("/Add")
    }

    const deleteClick = async (id) => {
        try {
            const response = await fetch(`http://localhost/api/films/delete/${id}`, {
                method: "DELETE",
            })
    
            if (response.ok) {
                console.log(`The film with id ${id} was successfully deleted!`)
                setFilms((prevFilms) => prevFilms.filter((film) => film.id !== id))
            } else {
                console.error(`Error when deleting a film with id ${id}`)
            }
        } catch (error) {
            console.error("ERROR:", error)
        }
    }

    const addClick = async()=> {
        try{

        } catch(error){
            console.error(`Error when adding a film with name ${name}`)
        }
    }

    useEffect(()=>{
        fetchFilms()
    },[])

    return(
        <div className="main-cont">
            <div className="title">
                <h1
                onClick={()=>toMain()}
                    style={{cursor:"pointer"}}>
                    Список фильмов
                </h1>
                <button
                onClick={()=>toAdd()}
                    style={{cursor:"pointer"}}>
                    +
                </button>
            </div>
            <div className="films-cont">     
                <>
                    {films.map((film)=>(
                        <div className="film" key={film.id}>
                            <p>
                                {film.name}
                            </p>
                            <button onClick={()=>deleteClick(film.id)}>
                                Удалить
                            </button>
                        </div>
                    ))}
                </>    
            </div>
        </div>
    )
}