import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ id, name, description, thumbnail }) => {
    let img_url = `${thumbnail.path}.${thumbnail.extension}`;
    img_url = img_url.replace('http://', 'https://')
    const isLongDescription = description.length > 100;
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-image">
                    <img className="card-image__img" src={img_url} alt=""/>
                </div>
                <div className="card-content">
                    <h4 className="card__title center-align">
                        <Link to={`/character/${id}`}> { name } </Link>
                    </h4>
                    {
                        !description ? <p className="card-description"> There's no description for { name } </p> :
                        isLongDescription ? <p className="card-description"> { description.substring(0, 85) } <Link to={`/character/${id}`}> ...READ MORE</Link> </p> :
                        <p className="card-description">{ description }</p >
                    }
                </div>
            </div>
        </div>
    )
}

export default CharacterCard