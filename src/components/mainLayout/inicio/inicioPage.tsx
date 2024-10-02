//interfaces
import { inicioDatosType, ventaComponent } from "../../interfaces/globalInterfaces"

import VentasCard from "./datosVentas"
import IniCards from "./datosInicio"
import { ventaDatos, inicioDatos} from "../../../data/ventasDatos"

//import components
import BarChart from "./chartsData/barChart"
import VentasTable from "./ventaTable/ventaTable"

import './inicio.css'

export default function Inicio () {
    const ventas:ventaComponent[] = ventaDatos;
    const iniDatos:inicioDatosType[] = inicioDatos;

    return (
        <>
            <div className="title-component">
                <h3>
                    Inicio
                </h3>
            </div>
            <section className="centered-cards">
                <div className="ventas-card">
                    {
                        ventas.map(venta =>(
                            <VentasCard key={venta.id} ventas={venta}/>
                        ))
                    }
                </div>
                <div className="ini-cards">
                    {
                        iniDatos.map(iniDato => (
                            <IniCards key={iniDato.id} iniDatos={iniDato}/>
                        ))
                    }
                </div>
            </section>


            <section className="chart-holder">
                <div className="chart-size">
                    <h3 style={{paddingBottom:'15px', textAlign:'center'}}>
                        Ganancias
                    </h3>
                    <BarChart />
                </div>

                <div className="sales-table">
                    <h3 style={{paddingBottom:'15px'}}>Ultimas Ventas</h3>
                    <div className="sales-table_holder">
                        <VentasTable />
                    </div>
                </div>
            </section>
        </>
    )
}