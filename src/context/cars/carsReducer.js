import { GET_CARS } from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_CARS: 
            return {
                cars: action.payload
            }
        
        default:
            return state;
    }
}