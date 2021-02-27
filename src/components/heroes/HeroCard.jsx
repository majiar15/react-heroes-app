import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const urlImages = 'https://majiar15.github.io/react-heroes-app/assets/heroes';
    return (
        <div className="card ms-3" style={ {maxWidth: 540} }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`${urlImages}/${id}.jpg`} alt={id}  className="card-img"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {superhero}</h5>
                        <p className="card-text"> {alter_ego} </p>
                        {
                            (alter_ego !== characters)
                                && <p className="card-text"> {characters} </p>
                        }
                        <p className="card-text">
                            <small className="text-muted" > {first_appearance}</small>
                        </p>
                        <Link to={`./hero/${id}`}>
                            mas...
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
