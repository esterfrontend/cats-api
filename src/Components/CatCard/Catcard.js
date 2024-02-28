import './CatCard.css'

const CatCard = ({name, origin, description, temperament, image}) => {
    return <div className='cat'>
        <h2>{name}</h2>
        <p>Origin: {origin}</p>
        <p>Description: {description}</p>
        <p>Temperament: {temperament}</p>
        <img src={image} alt=""/>
    </div>
}

export default CatCard