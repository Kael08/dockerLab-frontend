<<<<<<< HEAD
import { useNavigate } from "react-router-dom"
=======
>>>>>>> 23194706eb72767e07bb85538e7db5fe47df9326
import "/src/styles/Main.css"
import { useEffect,useState } from "react"

export default function Main(){
    const [films,setFilms] = useState([])
<<<<<<< HEAD
    const navigate = useNavigate()
=======
>>>>>>> 23194706eb72767e07bb85538e7db5fe47df9326

    const fetchFilms = async() => {
        try {
            const response = await fetch("http://localhost:3000/films/")
            const data = await response.json()
            console.log(data)
            setFilms(data)
        } catch(error){
            console.error("Ошибка при загрузке данных:",error)
        }
    }

<<<<<<< HEAD
    const toMain = () =>{
        navigate("/")
    }

    const toAdd = () =>{
        navigate("/Add")
    }

    const deleteClick = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/films/delete/${id}`, {
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

=======
>>>>>>> 23194706eb72767e07bb85538e7db5fe47df9326
    useEffect(()=>{
        fetchFilms()
    },[])

    return(
        <div className="main-cont">
<<<<<<< HEAD
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
=======
            <h1>
                Список фильмов
            </h1>
>>>>>>> 23194706eb72767e07bb85538e7db5fe47df9326
            <div className="films-cont">     
                <>
                    {films.map((film)=>(
                        <div className="film" key={film.id}>
                            <p>
                                {film.name}
                            </p>
<<<<<<< HEAD
                            <button onClick={()=>deleteClick(film.id)}>
                                Удалить
                            </button>
=======
>>>>>>> 23194706eb72767e07bb85538e7db5fe47df9326
                        </div>
                    ))}
                </>    
            </div>
        </div>
    )
}