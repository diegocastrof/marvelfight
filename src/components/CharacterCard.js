import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ id, name, description, thumbnail }) => {
    const img_url = `${thumbnail.path}.${thumbnail.extension}`

    return (
        <div className="card">
            <div className="card-image">
                <img src={img_url} alt=""/>
                <span className="card-title">{ name }</span>

            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <Link to={`/character/${id}`}>More about { name }</Link>
            </div>
        </div>
    )
}

export default CharacterCard