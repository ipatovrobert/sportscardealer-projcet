import React from 'react'
import PropTypes from 'prop-types'


const CarsItem = ({ car }) => {
    const {title, mileage, cubicCapacity, power, fuel, emissions, emissionsClass, price} = car;

    return (
        <div className='carsItem container'>
            <div className='carsItem-image'></div>
            <div className='carsItem-data1'>
                <p className='carsItem-data1--title'>{title}</p>
                <p className='carsItem-data1--text'>Mileage: {mileage}</p>
                <p className='carsItem-data1--text'>First Registration: 01/2018</p>
                <p className='carsItem-data1--text'>Cubic Capacity: {cubicCapacity}</p>
                <p className='carsItem-data1--text'>Power: {power}</p>
            </div>
            <div className='carsItem-data2'>
                <p className='carsItem-data1--text'>Fuel: {fuel}</p>
                <p className='carsItem-data1--text'>CO₂ Emissions: {emissions}g/km (combined)*</p>
                <p className='carsItem-data1--text'>Emission Class: Euro{emissionsClass} </p>
            </div>
            <div className='carsItem-price'>
                <p className='carsItem-price--brut'>Price: €{price} (Gross)</p>
                <p className='carsItem-price--net'>€{price - (price * 0.19)} (Net) 19,00% VAT</p>
            </div>
        </div>
    )
}

CarsItem.propTypes = {
    car: PropTypes.object.isRequired
}

export default CarsItem
