import * as React from 'react';

//table components
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

//table styles
import './vantaTable.css'



const columns: GridColDef[] = [
    {field: 'id', headerName:'Id', type: 'number',width: 70},
    {field: 'cliente', headerName:'Cliente', type: 'string', width: 120},
    {field: 'monto', headerName:'$ Monto', type: 'number',width: 70},
    {field: 'fecha', headerName:'fecha', type: 'string',width: 100},
    {field: 'descripcion', headerName:'Descripcion', type: 'string', width: 400},
]

const rows = [
    {id: 1, cliente: 'Gus Fring', descripcion:'New meta material from Lydia', monto:2500, fecha:'02/10/2024'},
    {id: 2, cliente: 'Walter White', descripcion:'Shower Heater', monto:800, fecha:'01/10/2024'},
    {id: 3, cliente: 'Jesse Pinkman', descripcion:'42" inch TV', monto:1000, fecha:'22/09/2024'},
    {id: 4, cliente: 'Hector Salamanca', descripcion:'Two m-16 plus two silver axes from the michoacan Drug Cartel', monto:12000, fecha:'14/9/2024'},
    {id: 5, cliente: 'Mike', descripcion:'4 Hidden Microphone bugs $800/each', monto:3200, fecha:'10/09/2024'},
    {id: 6, cliente: 'Gus Fring', descripcion:'New meta material from Lydia', monto:2500, fecha:'02/10/2024'},
    {id: 7, cliente: 'Walter White', descripcion:'Shower Heater', monto:800, fecha:'01/10/2024'},
    {id: 8, cliente: 'Jesse Pinkman', descripcion:'42" inch TV', monto:1000, fecha:'22/09/2024'},
    {id: 9, cliente: 'Hector Salamanca', descripcion:'Two m-16 plus two silver axes from the michoacan Drug Cartel', monto:12000, fecha:'14/9/2024'},
    {id: 10, cliente: 'Mike', descripcion:'4 Hidden Microphone bugs $800/each', monto:3200, fecha:'10/09/2024'},
]

const paginationModel = {page:0, pageSize: 5}

const VentasTable = () => {
    return (
        <Paper sx={{height:'400', width:'100%', backgroundColor:'#fff'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{pagination:{paginationModel}}}
                pageSizeOptions={[5,10]}
                sx={{border:0}}
            />
        </Paper>
    )
}

export default VentasTable