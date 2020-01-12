import React, { useReducer } from 'react';
import axios from 'axios';
import CarsReducer from './carsReducer';
import CarsContext from './carsContext';
import { GET_CARS } from '../types';

const CarsState = (props) => {
    const initialState = {
        cars: []
    }

    const [state, dispatch] = useReducer(CarsReducer, initialState);

    // GET CARS

    const getCars = async () => {

        const res = await axios.get('http://localhost:3001/cars');

        dispatch({
            type: GET_CARS,
            payload: res.data
        })
    }


    return (
        <CarsContext.Provider value={{
            cars: state.cars,
            getCars
        }}>
            {props.children}
        </CarsContext.Provider>
    )

}

export default CarsState;