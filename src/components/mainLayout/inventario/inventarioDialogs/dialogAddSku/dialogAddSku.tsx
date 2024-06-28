//import * as React from 'react';
//react-hook-form functions
import { useForm, SubmitHandler } from 'react-hook-form';
//material UI functions
import { 
            Dialog,
            Button,
            Box,
            TextField,
            DialogActions,
            DialogContent,
            Typography,
            InputAdornment,
        } from '@mui/material';
//Interfaces para las funciones y formularios del Dialog        
import { addSkuProps } from '../../inventoryTypes/inventoryTypes';
import { addSkuForm } from '../../inventoryTypes/addSkuForm';

// validation funcion
import validateResolver from './dialogValidations';
//image upload function
import ImageUpload from './uploadImage';

//CSS para los HTML tags
import './dialogAddSku.css'

//componenet principal del dialogo para crear un nuevo SKU
export default function SkuAddDialog (props: addSkuProps) {
    
    const {open, closingDialog} = props;

    const {register, handleSubmit, formState: { errors }} = useForm<addSkuForm>({
        resolver: validateResolver
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
                <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                            {/*SKU controller */}
                            <div className='erros-colums'>
                                <TextField
                                    sx={{
                                        width:'200px'
                                    }} 
                                    label="SKU"
                                    {...register('sku')}
                                    error={!!errors.sku}
                                    helperText={errors.sku?.message}
                                />
                            </div>
                            <div className='erros-colums'>
                                <TextField
                                    sx={{
                                        width:'200px'
                                    }}
                                    label="UPC (Serial)"
                                    type='number'
                                    {...register('upc')}
                                    error={!!errors.upc}
                                    helperText={errors.upc?.message}
                                />
                            </div>
                            <div className='erros-colums'>
                                <TextField
                                    sx={{
                                        width:'200px'
                                    }}
                                    label="Costo"
                                    type='number'
                                    InputLabelProps={{ shrink: true }}
                                    {...register('costo')}
                                    error={!!errors.costo}
                                    helperText={errors.costo?.message}
                                    InputProps={{
                                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                                    }}
                                />
                            </div>
                            <div className='erros-colums'>
                                <TextField
                                    label="Precio"
                                    type='number'
                                    InputLabelProps={{ shrink: true }}
                                    {...register('precio')}
                                    error={!!errors.precio}
                                    helperText={errors.precio?.message}
                                    InputProps={{
                                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                                    }}
                                />
                            </div>
                        </div>
                        <div className='second-section'>
                            <div className='erros-colums'>
                                <TextField
                                    sx={{
                                        width: '900px'
                                    }}
                                    label="Descripcion"
                                    type='text'
                                    {...register('descripcion')}
                                    error={!!errors.descripcion}
                                    helperText={errors.descripcion?.message}
                                />
                            </div>
                        </div>
                        <div className="third-section">
                            <div className='erros-colums'>
                                <TextField
                                    label="Proveedor"
                                    type='text'

                                    {...register('proveedor')}
                                    error={!!errors.proveedor}
                                    helperText={errors.proveedor?.message}
                                />
                            </div>
                            <div className='erros-colums'>
                                <TextField
                                    label="Peso"
                                    type='text'
                                    {...register('tags')}
                                    error={!!errors.tags}
                                    helperText={errors.tags?.message}
                                    InputProps={{
                                        startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
                                    }}
                                />
                            </div>
                            <div className='erros-colums'>
                                <TextField
                                    label="Tags"
                                    type='text'
                                    {...register('tags')}
                                    error={!!errors.tags}
                                    helperText={errors.tags?.message}
                                />
                            </div>
                        </div>
                    </Box>
                </form>
                <div style={{paddingTop:'60px'}}>
                    <ImageUpload />
                </div>
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