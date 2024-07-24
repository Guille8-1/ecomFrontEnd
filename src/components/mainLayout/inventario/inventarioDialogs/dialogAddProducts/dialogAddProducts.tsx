import * as React from 'react'
import { Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import { addProductsProps } from "../../inventoryTypes/addProductTypes/addProducts";

import './dialogAddProducts.css'

export default function AddProductsDialog (props:addProductsProps) {
    const [name, setName] = React.useState<string>("");
    const [button, setButton] = React.useState<boolean>(false)
    const [validateCSV, setValidateCSV] = React.useState<boolean>(false)
    const [warning, setWarning] = React.useState<boolean>(true)
    const {open, closingDialog} = props;
    const savingData = () => {
        console.info('saving Data')
        closingDialog();
    }
    const handlingCSV = (e:React.ChangeEvent<HTMLInputElement> ) => {
        const csvFile = e.target.files?.[0]
        if(csvFile){
            console.info(csvFile)
            setName(csvFile?.name)
            const csvVerification = /.(csv)$/
            if(csvVerification.test(csvFile.name)){
                setButton(false)
                setValidateCSV(false);
            } else {
                setValidateCSV(true);
                setWarning(false)
                setName('')
            }
        }
    }
    const downloadTemplate = () => {
        console.info('downloading template')
    }
    return (
        <>
            <Dialog
                open={open}
                fullWidth={true}
                maxWidth={'lg'}
                sx={{
                    '& .MuiDialog-paper':{
                        height:'50vh', 
                        maxHeight: '50vh',
                        width:'90vh'
                    }
                }}
            >
                <Typography variant='h6' sx={{
                        paddingBlock:'8px'
                        }} >
                       + Productos Archivo CSV
                </Typography>
                <DialogContent dividers>
                    <div className="recomendacion">
                        <p style={{fontWeight:'bolder'}}>Asegurate de Seleccionar el Archivo Correcto a Subir al Sistema.</p>
                    </div>
                    <section className="csv-section">
                            {
                                name ?
                                <p style={{ 
                                    color:'green', 
                                    fontWeight:'bold',
                                    fontStyle:'italic',
                                    textAlign:'center'
                                }}>{`Archivo: ${name} Seleccionado`}</p>
                                : !warning ?
                                <p style = {{ 
                                    color:'red', 
                                    fontWeight:'bold',
                                    fontStyle:'italic',
                                    textAlign:'center'
                                }}
                                >Archivo No Valido</p>
                                :
                                <p style = {{ 
                                    color:'grey', 
                                    fontWeight:'bold',
                                    fontStyle:'italic',
                                    textAlign:'center'
                                }}
                                >No Archivo Seleccionado</p>
                            }
                            <Button
                                style={{
                                    width:'138px',
                                    position:'relative',
                                    zIndex:'1'
                                }}
                                component='label'
                                variant="contained">
                                    <span>Archivo .CSV</span>
                                <input 
                                    accept=".csv"
                                    style={{display:'none'}}
                                    id='csv-upload'
                                    type='file'
                                    onChange={handlingCSV}
                                />
                            </Button>
                    </section>
                    <div className='legend'>
                        <section className='title-csv'>
                            <p>
                                <span>Impotante: </span>
                                Descargar el modelo adjunto y respetar los campos incluidos. <br /> Si los campos son distintos el sistema rechazara el proceso.
                            </p>
                        </section>
                        <section style={{
                            display: 'flex',
                            flexDirection:'row',
                            gap:'10px'
                        }}>
                            <Button onClick={downloadTemplate}>
                                <img src="public\images\8242984.png" alt="" />
                                Productos Unidad
                            </Button>
                            <Button onClick={downloadTemplate}>
                                <img src="public\images\8242984.png" alt="" />
                                Productos UDM
                            </Button>
                        </section>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button style={{backgroundColor: '#84888E'}} variant="contained" onClick={closingDialog}>Cancelar</Button>
                    <Button 
                        color='primary'
                        variant="contained" 
                        onClick={savingData}
                        disabled={button || validateCSV}
                        >Guardar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}