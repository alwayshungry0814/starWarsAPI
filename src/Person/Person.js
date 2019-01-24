import React from 'react';

const person = ( props ) => {
    return (
        <article className="Person">
        <div>
            <p>Name should print here</p>
            <h1>{props.name}</h1>
        </div>
        </article>
    )
};

export default person;