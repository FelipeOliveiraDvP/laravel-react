import React from "react";

export function Button() {
    function handleClick() {
        alert("Teste!!!");
    }

    return <button onClick={handleClick}>Clique-me</button>;
}
