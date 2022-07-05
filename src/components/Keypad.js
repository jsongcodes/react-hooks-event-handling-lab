import React from "react";

function Keypad() {
    function handleKeypad(event) {
        console.log('Entering password...')
    }
    return (
        <>
            <input type="password" onChange={handleKeypad} />
        </>
    )
}

export default Keypad;