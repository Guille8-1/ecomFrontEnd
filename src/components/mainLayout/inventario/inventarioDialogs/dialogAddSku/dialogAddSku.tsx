//import * as React from 'react';

//react-hook-form functions
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
//material UI functions
import { 
            Dialog,
            Button,
            Box,
            OutlinedInput,
            TextField,
            DialogActions,
            DialogContent,
            Typography,
            InputAdornment 
        } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
//Interfaces para las funciones y formularios del Dialog        
import { addSkuProps } from '../../inventoryTypes/inventoryTypes';
import { addSkuForm } from '../../inventoryTypes/addSkuForm';
// import DialogForm from './dialogContet'

//CSS para los HTML tags
import './dialogAddSku.css'


//componenet principal del dialogo para crear un nuevo SKU
export default function SkuAddDialog (props: addSkuProps) {
    const { open, closingDialog } = props

    const {control, handleSubmit, formState: { errors }} = useForm<addSkuForm>({
        defaultValues: {
            sku: '',
            upc: 0,
            costo: 0,
            descripcion:'',
            precio: 0,
            proveedor: '',
            peso: 0,
            tags: ''
        }
    });
    const onSubmit:SubmitHandler<addSkuForm> = (addSkuData) => {
        console.info({addSkuData});
    }
    return (
        <>
            <Dialog 
                open={open}
                fullWidth={true}
                maxWidth={'lg'}
                sx={{
                    '& .MuiDialog-paper':{
                        height:'60vh', 
                        maxHeight: '60vh',
                    }
                }}
            >
                <Typography variant='h6' sx={{
                    paddingBlock:'8px'
                    }} >
                    Crear Nuevo SKU
                </Typography>
                
                <DialogContent dividers>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    paddingTop: '90px',
                                    gap: '20px',
                                    width: 'auto',
                                    height: '100px'
                                }}
                        >
                            <div className='first-section'>
                                {/*SKU controller */}
                                <Controller
                                    name='sku'
                                    control={control}
                                    rules={{
                                        required: 'SKU requerido',
                                        minLength: {
                                            value: 10,
                                            message: 'Nombre mas especifico'
                                        },
                                        pattern: {
                                            value: /^(?!.*(.)\1{2}).+$/,
                                            message: 'caracteres repetidos'
                                        },
                                    }}
                                    render={({field}) => (
                                        <TextField
                                            {...field}
                                            label='Nombre SKU'
                                            color='error'
                                            variant='outlined'
                                            error={!!errors.sku}
                                            helperText={errors.sku ? errors.sku.message : ''}
                                        />
                                    )}
                                />
                                {/*UPC controller */}
                                <Controller 
                                    name='upc'
                                    control={control}
                                    rules={{
                                        required: 'El UPC es requerido',
                                        min: {
                                            value: 0,
                                            message:'UPC negativo'
                                        }
                                    }}
                                    render={({field})=>(
                                        <TextField
                                            {...field}
                                            label='UPC (Codigo de Barras)'
                                            variant='filled'
                                            error={!!errors.upc}
                                            helperText={errors.upc ? errors.upc.message:''}
                                            sx={{
                                                '& .MuiFormHelperText-roo':{
                                                    position: 'absolute',
                                                    bottom: '20px'
                                                },
                                                width: '14.2vw'
                                            }}
                                            type='number'
                                        />
                                    )}
                                />
                                {/*Costo controller */}
                                <Controller 
                                    name='costo'
                                    control={control}
                                    rules={{
                                        required: 'Costo requerido',
                                        min: {
                                            value: 1,
                                            message:'Costo requerido'
                                        }
                                    }}
                                    render={({field})=>(
                                        <TextField
                                            {...field}
                                            label='Costo'
                                            color='error'
                                            variant='outlined'
                                            error={!!errors.costo}
                                            helperText={errors.costo ? errors.costo.message:''}
                                            sx={{
                                                width: '8vw'
                                            }}
                                            type='number'
                                            InputProps={{
                                                startAdornment: <InputAdornment position='start'>$</InputAdornment>
                                            }}
                                        />
                                    )}
                                />
                                 {/*Precio controller */}
                                 <Controller 
                                    name='precio'
                                    control={control}
                                    rules={{
                                        required: 'Precio requerido',
                                        min: {
                                            value: 1,
                                            message:'Precio requerido'
                                        }
                                    }}
                                    render={({field})=>(
                                        <TextField
                                            {...field}
                                            label='Precio'
                                            color='error'
                                            variant='outlined'
                                            error={!!errors.precio}
                                            helperText={errors.precio ? errors.precio.message:''}
                                            sx={{
                                                width: '8vw'
                                            }}
                                            type='number'
                                            InputProps={{
                                                startAdornment: <InputAdornment position='start'>$</InputAdornment>
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className='second-section'>
                                {/*Descripcion controller */}
                                <Controller
                                    name='descripcion'
                                    control={control}
                                    rules={{
                                        required: 'Descripcion max Caracters (200)',
                                        minLength: {
                                            value: 20,
                                            message: 'Descripcion mas especifica'
                                        },
                                        maxLength: {
                                            value: 200,
                                            message: 'Descrpecion extensa'
                                        }
                                    }}
                                    render={({field}) => (
                                        <TextField
                                            {...field}
                                            sx={{width: '49.5vw'}}
                                            label='Descripcion'
                                            color='error'
                                            variant='outlined'
                                            error={!!errors.descripcion}
                                            helperText={errors.descripcion ? errors.descripcion.message : ''}
                                        />
                                    )}
                                />
                            </div>
                            <div className='third-section'>
                                {/*Proveedor controller */}
                                <Controller
                                    name='proveedor'
                                    control={control}
                                    rules={{
                                        required: false,
                                        minLength: {
                                            value: 5,
                                            message: 'Proveedor mas especifico'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Proveedor extensa'
                                        }
                                    }}
                                    render={({field}) => (
                                        <TextField
                                            {...field}
                                            sx={{width: '19.5vw'}}
                                            label='Proveedor'
                                            variant='filled'
                                            error={!!errors.proveedor}
                                            helperText={errors.proveedor ? errors.proveedor.message : ''}
                                        />
                                    )}
                                />
                                {/*Peso controller */}
                                <Controller 
                                    name='peso'
                                    control={control}
                                    rules={{
                                        required: true,
                                        min: {
                                            value: 1,
                                            message:'Peso requerido'
                                        }
                                    }}
                                    render={({field})=>(
                                        <TextField
                                            {...field}
                                            label='Peso'
                                            variant='outlined'
                                            error={!!errors.peso}
                                            helperText={errors.peso ? errors.peso.message:''}
                                            sx={{
                                                width: '8vw'
                                            }}
                                            type='number'
                                            InputProps={{
                                                startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className='fourth-section'>
                                {/*imagen controller */}
                                <Button
                                    component={'label'}
                                    role={undefined}
                                    variant='contained'
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon/>}
                                >
                                    Subir Imagen</Button>
                            </div>
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color='error' variant='contained' onClick={closingDialog}>Cancel</Button>
                    <Button 
                            type='submit'
                            variant='contained' 
                            sx={{
                                display:'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}
                            className='action-button'
                            onClick={handleSubmit(onSubmit)}
                            >Guardar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}