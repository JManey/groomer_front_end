import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { loadDogs, getAllDogs} from '../store/dogs';

 function DogsList  (props) {
    const dogs =  useSelector(getAllDogs);
    // const dogs = 
    const dispatch = useDispatch();
    useEffect( () => {
          dispatch( loadDogs())
        },[])
        
        
    return (
        // <div>hello</div>
        <ul>
            {dogs.map(dog => (
            <li key={dog._id} >
                {dog.name} {dog.age} {dog.sex} {dog.color}
                </li>
            ))}
        </ul>
    )
}

export default DogsList;