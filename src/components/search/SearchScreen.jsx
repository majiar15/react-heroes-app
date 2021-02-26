import React from 'react'
import  queryString  from "query-string";
import { useLocation } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    let location = useLocation();
    const { q = '' } =queryString.parse(location.search)
    const heroesFiltred = getHeroesByName(q);
    
    const [{searchText}, setSearchValue] = useForm({searchText: q});
    const handleInputSubmit = (e)=>{
        console.log(searchText);
       
        history.push(`?q=${searchText}`)
        e.preventDefault();
     
    }
    return (
        <>
            <h1>Search</h1>   
            <hr/>
            <div className=" row ">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={ handleInputSubmit }>
                        <input 
                            type="text" 
                            name="searchText"
                            placeholder="Find yout hero"
                            className="form-control"
                            onChange={setSearchValue}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    {
                        (q === '')
                            &&
                            <div className=" alert alert-info">
                                search a hero
                            </div>
                    }
                     {
                        (q !== '' && heroesFiltred.length === 0)
                            &&
                            <div className=" alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }
                    
                    {

                

                        heroesFiltred.map( hero =>{
                           return <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}
