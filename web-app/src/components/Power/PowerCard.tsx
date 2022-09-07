import React from "react";
import "./power.css";

const pType_to_color = (p : PowerType) : Property.backgroundColor => {
    switch (p) {
        case "AtWill":
            return "green"
        case "Encounter":
            return "red"
        case "Daily":
            return "rgba(54, 71, 71, 0.733)"
        case "Utility":
            return "rgba(25, 138, 236, 0.808)"
    }
}

export const PowerCard = (props : { powerMod: PowerModel }): JSX.Element => {
    const pm = props.powerMod ;

    return (
        <div className="power-card">
            <div 
                id="pc_header"
                style={{
                    backgroundColor : pType_to_color(pm.powerType)
                }}
            >
                <h1>{pm.name}</h1>
                <i>{pm.flavorText}</i>
            </div>
            <div id="pc_spacer1" 
                style={{ height: "5px", backgroundColor: "rgba(236, 241, 212, 0.822)"}} 
            />
            <div id="pc_sub_header">
                <h5 style={{marginLeft: "10px"}}>
                    {`${pm.className} Level ${pm.level} Power`}
                </h5>
                <h5 style={{marginLeft: "10px"}}>
                    {pm.powerType} {pm.keywords.length > 0 ? `+ ${pm.keywords}` : ""}
                </h5>
                <h5 style={{marginLeft: "10px"}}>
                    {`${pm.actionType} Action`}
                </h5>
            </div>
            <div id="pc_sub_section">
                <h5 style={{marginLeft: "10px"}}>
                    <b>Target: </b> {pm.target}
                </h5>
            </div>
        </div>
    )
}