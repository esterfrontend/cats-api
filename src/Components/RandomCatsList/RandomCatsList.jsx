import { useEffect, useState } from "react"
import catApiService from "../../services/catApiService"
import CatCard from "../CatCard/Catcard"

const RandomCatsList = () => {
    const [cats, setCats] = useState([])

    const fetchCats = async () => {
        try {
            const response = await catApiService.getRandomCats()
            console.log(response)
            setCats(response)
        } catch(err) {
            console.log('Error:', err)
        }
    }

    useEffect(() => {
        fetchCats()
    }, [])

    return <>
        <h1>Cats List</h1>
        {cats.map((cat) => {
            const catInfo = cat.breeds[0]
            return (
                <CatCard 
                    key={cat.id}
                    name={catInfo.name}
                    origin={catInfo.origin}
                    description={catInfo.description}
                    temperament={catInfo.temperament}
                    image={cat.url}
                />
            )
        })}
    </>
}

export default RandomCatsList