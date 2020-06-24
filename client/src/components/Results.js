import React from 'react';

const Results = (props) => (
    props.results ? (
        <div>
            <p>Won cars: {props.results.timesWonCar}</p>
            <p>Won goats: {props.results.timesWonGoat}</p>
            <p>Chances of winning car: {Math.round((props.results.timesWonCar / props.results.simulations) * 100) / 100}</p>
        </div>
    ) : null
);

export default Results;