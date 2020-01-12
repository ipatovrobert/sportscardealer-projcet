import React, {useEffect, useContext} from 'react';
import carsContext from '../context/cars/carsContext';
import CarsItem from './CarsItem';

const Cars = () => {
    const CarsContext = useContext(carsContext);
    const {getCars, cars} = CarsContext;

    useEffect( () =>{
        getCars();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {cars.map((cars) => <CarsItem key={cars.id} car={cars}/>)}
        </div>
    )
}

export default Cars
