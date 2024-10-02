import React from "react";

import { inicioDatosType } from "../../interfaces/globalInterfaces";

interface iniDatos {
    iniDatos: inicioDatosType
}

const IniCards: React.FC<iniDatos> = ({iniDatos}) => {
    const colorCards = iniDatos.color;
    const iconSvg = iniDatos.iconSvg

    return (
        <div className="ini-cards_element" style={{
            backgroundColor: colorCards
        }}>
            <div className="dataHolder">
                <h3>{iniDatos.dataNumber}</h3>
                <p>{iniDatos.name}</p>
            </div>
            <div className="iconsHolder">
                <img src={`${iconSvg}`} style={{
                    width: '40px',
                    height:'40px'
                }}/>
            </div>
        </div>
    )
}
export default IniCards