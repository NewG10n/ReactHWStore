import React from 'react';

const Button = (props) => {
    const name = props.name;

    return (
        <button>
            {name}
        </button>
    )
}

export default Button;