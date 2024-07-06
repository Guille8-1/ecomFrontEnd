import * as React from 'react';
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  MRT_RowSelectionState,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { dataInventory } from './inventarioData';
import { Edit, Delete, AddBoxOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import Button from '@mui/material/Button'
import { download, generateCsv, mkConfig } from 'export-to-csv';

import { ProductType as ItemType } from '../inventoryTypes/addSkuTypes/productType';
import './dataTable.css'
//Dialog UOM

import DialogUom from '../inventarioDialogs/addUomDialog/uomDialog';
//data Imported
const data:ItemType[] = dataInventory
export interface exportUom {
    skuName: string
    currentQty: number
    expDate:string
}
const DataTable = () => {
    const [uom, setOpenUom] = React.useState<boolean>(false);
    const [uomData, setUomData] = React.useState<exportUom>({skuName:'',currentQty:0,expDate:''})
    const openingUom = () => {
        setOpenUom(true)
    }
    const closingUom = () =>{
        setOpenUom(false)
    }
    const [ rowSelection, setRowSelection ] = React.useState<MRT_RowSelectionState>({});
    const columns = React.useMemo<MRT_ColumnDef<ItemType>[]>( 
        () => [
            {
                accessorKey: 'id',
                header: 'Id',
                size: 50
            },
            {
                accessorKey: 'sku',
                header: 'SKU',
                size: 150
            },
            {
                accessorKey: 'upc',
                header: 'UPC',
                size: 150
            },
            {
                accessorKey: 'cantidadDisp',
                header: 'Cantidad',
                size: 5
            },
            {
                accessorKey: 'costo',
                header: 'Costo',
                size: 5
            },
            {
                accessorKey: 'precio',
                header: 'Precio',
                size: 5
            },
            {
                accessorKey: 'proveedor',
                header: 'Proveedor',
                size: 150,

            },
            {
                accessorKey: 'marca',
                header: 'Marca',
                size: 150
            },
            {
                accessorKey: 'descripcion',
                header: 'Descripcion',
                size: 150,

            },
            {
                accessorKey: 'peso',
                header: 'Peso',
                size: 150
            },
            {
                accessorKey: 'fechaExp',
                header: 'Fecha Exp',
                size: 150,
            },
        ],[],
    );
    const csvConfig = mkConfig({
        fieldSeparator: ',',
        decimalSeparator: '.',
        useKeysAsHeaders: true
    });
    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(data);
        download(csvConfig)(csv)
    };

    
    

    const rowsSelected:ItemType[] = [];

    const handleSelectedRows = () => {
        const getRows = table.getSelectedRowModel().rows;
        for (let i = 0; i < getRows.length; ++i) {
            const getInfo = getRows[i].original ;
            if(getRows[i].original.cantidadDisp === 0 ) {
                rowsSelected.push(getInfo);
            }else {
                alert('SKU Cantidad Mayor a 0');
                return
            }
        }
        console.info(rowsSelected);
    }

    const descontinueRow = (rowData:ItemType) => {
        rowData.cantidadDisp === 0 ? 
        console.info(rowData):
        alert('SKU Cantidad Mayor a 0');
    }


    const ediditngRow = (rowData:ItemType) => {
        console.info(rowData);
    }
    
    const sendingUomData = (itemRow:ItemType) => {
        setUomData (
            {
                skuName: itemRow.sku,
                expDate: itemRow.fechaExp,
                currentQty: itemRow.cantidadDisp
            }
        )
    }
   
    
    const table = useMaterialReactTable({
                columns,
                data,
                enableFullScreenToggle: false,
                enableDensityToggle: false,
                enableRowSelection: true,
                enableRowActions: true,
                enableColumnPinning : false,
                enableFacetedValues: true,
                paginationDisplayMode : 'pages',
                positionToolbarAlertBanner: 'none',
                onRowSelectionChange: setRowSelection,
                state: {rowSelection},
                muiSearchTextFieldProps: {
                    size: 'small',
                    variant: 'outlined',
                },
                initialState: {
                    density: 'compact',
                    columnPinning:  {
                                        left: ['mrt-row-actions', 'mrt-row-select'],
                                        right: ['mrt-row-expand' ]
                                    }    
                 },
                renderRowActionMenuItems:   ({table, row}) => [
                        <MRT_ActionMenuItem
                            icon = {<Edit />}
                            key = 'edit'
                            label = 'Editar'
                            onClick={() => {ediditngRow(row.original)}}
                            table = {table}
                            className='options-table'
                        />,
                        <MRT_ActionMenuItem
                            icon={<AddBoxOutlined />}
                            key="dialog"
                            label="Undiad de Medida"
                            onClick={()=> {
                                sendingUomData(row.original);
                                openingUom();
                            }}
                            table={table}
                            className='options-table'
                        />,
                        <MRT_ActionMenuItem
                            icon={<Delete />}
                            key="delete"
                            label="Descontinuar"
                            onClick={()=> {descontinueRow(row.original)}}
                            table={table}
                            className='options-table'
                        />,
                ],
                columnFilterDisplayMode: 'subheader',
                renderTopToolbarCustomActions: ()=>(
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '1rem',
                                padding: '8px',
                            }}>
                            <Button 
                                style={{color: 'black', backgroundColor:'#c2c2c2'}} 
                                onClick={handleExportData}
                                startIcon={<FileDownloadIcon/>}
                            >CSV
                            </Button>
                            <Button 
                                variant='contained'
                                color='warning'
                                startIcon = { <Delete/> }
                                disabled = { !table.getIsSomeRowsSelected() }
                                onClick = {handleSelectedRows}
                            >Descontinuar SKUs
                            </Button>
                        </Box>
                    </>
                ),
                muiPaginationProps: 
                    {
                            color: 'primary',
                            rowsPerPageOptions: [10,20,30,50],
                            shape: 'rounded',
                            variant: 'text'
                    },
    })

    return  (
                <>
                    <MaterialReactTable table = {table}/>
                    <DialogUom open={uom} closingDialog={closingUom} skuData={uomData}/>
                </> 
            )
}
export default DataTable;