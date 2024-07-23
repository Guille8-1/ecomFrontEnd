import { Box, Button, Dialog, DialogActions, DialogContent, TextField, Typography } from "@mui/material";
import { uomType } from "./uomDialogType";
import { SubmitHandler, useForm } from "react-hook-form";
import uomValidate from "./uomValidation";
import { uomTypeForm } from "./uomDialogType";
export default function DialogUom (props:uomType) {
    const {open, closingDialog, skuData} = props;

    const {handleSubmit, register, formState:{errors}} = useForm<uomTypeForm>({resolver: uomValidate})

    const cleanUpForm = () => {
        const values = document.querySelectorAll('input')
        values.forEach((value)=>{
            value.value = '';
        })
    }

    const onSubmit:SubmitHandler<uomTypeForm> = (uomData) => {
        console.info(uomData);
        cleanUpForm();
        closingDialog();
    }


    const currentQty = skuData?.currentQty;
    const skuName = skuData?.skuName;
    const expDate = skuData?.expDate;
    const proveedor = skuData?.proveedor;
    const costo = skuData?.costo;
    const precio = skuData?.precio;

    return (
        <>
            <Dialog 
                open={open}
                fullWidth={true}
                maxWidth='lg'
                sx={{
                    '& .MuiDialog-paper':{
                        height:'70wv',
                        maxHeight: '70wv',
                    }
                }}
                >
                <Typography variant="h6"
                    sx={{
                        paddingBlock:'8px'
                    }}
                >
                    + Unidad de Medida SKU: {skuName}
                </Typography>
                <DialogContent dividers>
                    <form action="" style={{marginTop:'1px'}}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                paddingTop: '90px',
                                gap: '20px',
                                width: 'auto',
                                height: '100px',
                                paddingY:'100px'
                            }}
                        >
                        <div className='first-section'>
                            <p> <span style={{fontWeight:'bold'}}>SKU: </span>{skuName}</p>
                            <p> <span style={{fontWeight:'bold'}}>Cantidad Actual: </span>{currentQty}</p>
                            <p> <span style={{fontWeight:'bold'}}>Fecha Expiracion: </span>{expDate}</p>
                            <p> <span style={{fontWeight:'bold'}}>Proveedor: </span>{proveedor}</p>
                            <p> <span style={{fontWeight:'bold'}}>Costo: </span>{costo}</p>
                            <p> <span style={{fontWeight:'bold'}}>Precio: </span>{precio}</p>
                            {/*SKU controller */}
                        </div>
                        <div className="uomSecond-section" style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            gap:'20px'
                        }}>
                            <div className='erros-colums'>
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    sx={{
                                        width:'200px'
                                    }} 
                                    label="Nombre UDM"
                                    type="text"
                                    {...register('uomName')}
                                    error={!!errors.uomName}
                                    helperText={errors.uomName?.message}
                                />
                            </div>
                            <div className='erros-colums'>
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    sx={{
                                        width:'200px'
                                    }}
                                    label="Unidad De Medida"
                                    type="number"
                                    {...register('uomUnitFactor')}
                                    error={!!errors.uomUnitFactor}
                                    helperText={errors.uomUnitFactor?.message}
                                />
                            </div>
                            <div className='erros-colums'>
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    sx={{
                                        width:'600px'
                                    }}
                                    label="Descripcion"
                                    type="text"
                                    {...register('descripcion')}
                                    error={!!errors.descripcion}
                                    helperText={errors.descripcion?.message}
                                />
                            </div>
                        </div>
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button style={{backgroundColor: '#84888E'}} variant="contained" onClick={closingDialog}>
                        Cerrar
                    </Button>
                    <Button 
                        color="primary" 
                        variant="contained"
                        onClick={handleSubmit(onSubmit)}
                        >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}