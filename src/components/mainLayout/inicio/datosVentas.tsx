import React from "react";
import { ventaComponent } from "../../interfaces/globalInterfaces";

interface VentasData {
    ventas: ventaComponent;
}

const UserCard: React.FC<VentasData> = ({ ventas }) => {
    return (
      <div className="user-card">
        <h3>{ventas.name}</h3>
        <p>{ventas.dataNumber}</p>
      </div>
    );
};

export default UserCard