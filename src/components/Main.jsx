import "/src/styles/Main.css"
import { useEffect,useState } from "react"

export default function Main(){
    const [films,setFilms] = useState([])

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

    useEffect(()=>{
        fetchFilms()
    },[])

    return(
        <div className="main-cont">
            <h1>
                Список фильмов
            </h1>
            <div className="films-cont">     
                <>
                    {films.map((film)=>(
                        <div className="film" key={film.id}>
                            <p>
                                {film.name}
                            </p>
                        </div>
                    ))}
                </>    
            </div>
        </div>
    )
}