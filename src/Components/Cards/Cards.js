import React, { useEffect, useState } from 'react';
import TinderCards from 'react-tinder-card';
import axios from '../Axios/Axios';
import './Cards.css';

function Cards() {
    const [people,setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchData();
    },[])

    const swiped = (direction, nameToDelete) => {
        console.log("removing:"+nameToDelete);
        // setLastDirection(direction)
    }

    const outOfFrame = (name) =>{
        console.log(name + "Left the Screen")
    }

    return (
        <div className="cards">

            <div className="card_container">
            {
                people.map((person) =>(
                   <TinderCards
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                   >
                       <div 
                            style={{ backgroundImage : "url("+ person.imgUrl+")" }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                       </div>
                    </TinderCards>
                ))
            }
            </div>

        </div>
    )
}

export default Cards
