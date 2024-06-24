import { ventaComponent } from "../../interfaces/globalInterfaces"
import VentasCard from "./datosVentas"
import { ventaDatos } from "../../../data/ventasDatos"

import BartChart from "./chartsData/barChart"

import './inicio.css'

export default function Inicio () {
    const ventas:ventaComponent[] = ventaDatos


    return (
        <>
            <main className="displaying-data">
                    <div className="title-component">
                        <h3>
                            Inicio
                        </h3>
                    </div>
                <section className="centered-cards">
                    <div className="ventas-card">
                        {ventas.map(venta =>(
                            <VentasCard key={venta.id} ventas={venta}/>
                        ))}
                    </div>
                </section>

                <section className="chart-section">
                    <header className="chart-title">
                        <h2>Reportes Venta & Ganancias</h2>
                    </header>
                </section>
                <div className="chart-size">
                    <BartChart />
                </div>
            </main>
        </>
    )
}