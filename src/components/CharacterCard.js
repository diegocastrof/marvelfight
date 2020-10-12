import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ id, name, description, thumbnail }) => {
    let img_url = `${thumbnail.path}.${thumbnail.extension}`;
    img_url = img_url.replace('http://', 'https://')
    const isLongDescription = description.length > 100;
    return (
        <div className="card">
            <div className="card-image">
                <img src={img_url} alt=""/>
            </div>
            <div className="card-content">
                <h4 className="card__title center-align"> { name } </h4>
                {
                    !description ? <p> There's no description for { name } </p> :
                    isLongDescription ? <p> { description.substring(0, 100)} ... </p> :
                    <p>{ description }</p>
                }
            </div>
            <div className="card-action">
                <Link to={`/character/${id}`}>More about { name }</Link>
            </div>
        </div>
    )
}

export default CharacterCard