import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';


export const HeroScreen = ({history}) => {
    // const params = useParams();
    const {heroeId} = useParams();

    const hero = getHeroesById(heroeId);
    const handleReturn = ()=>{
        if(history.length <= 2){
            history.push('/');
        }else{
        history.goBack();
        }
    }
    if (!hero){
        return <Redirect to="/" />;
    }
    return (
        <div className=" row mt-5 ">
            <div className="col-4">
                <img src={`../assets/heroes/${hero.id}.jpg`}
                     alt={hero.id} 
                     className="img-thumbnail"/>
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b> {hero.alter_ego}</li>
                    <li className="list-group-item"> <b>publisher </b> {hero.publisher}</li>
                    <li className="list-group-item"> <b>frist apparence: </b> {hero.first_appearance}</li>

                </ul>
                <h5> Characters </h5>
                <p>{ hero.characters }</p>
                <button 
                    className="btn btn-outline-primary"
                    onClick={ handleReturn }
                >
                    returm
                </button>
            </div>
            
            
        </div>
    )
}
