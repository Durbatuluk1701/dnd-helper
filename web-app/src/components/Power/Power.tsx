import React from "react";

export const Power = (props : { powerMod: PowerModel }): JSX.Element => {
    const pm = props.powerMod ;

    return (
        <div>
            <h1>{pm.name}</h1>
            <h2>{pm.className}</h2>

        </div>
    )
}