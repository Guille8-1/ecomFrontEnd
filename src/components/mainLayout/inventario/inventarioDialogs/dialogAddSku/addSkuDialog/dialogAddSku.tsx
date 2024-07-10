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
import { addSkuProps } from '../../../inventoryTypes/addSkuTypes/inventoryTypes';
import { addSkuForm } from '../../../inventoryTypes/addSkuTypes/addSkuForm';

// validation funcions
import validateResolver from './dialogValidations';

//image upload function
import ImageUpload from './uploadImage';

//CSS para los HTML tags
import './dialogAddSku.css';

//componenet principal del dialogo para crear un nuevo SKU
export default function SkuAddDialog (props: addSkuProps) {
    const {open, closingDialog} = props;
    
    const {register, handleSubmit, formState: { errors }} = useForm<addSkuForm>({
        resolver: validateResolver
    });
    //Limpiar el formulario despues de crear el SKU
    const clean = ''
    const cleanUpForm = () => {
        const values = document.querySelectorAll('input')
        values.forEach((value)=>{
            value.value = clean;
        })
    }

    const onSubmit:SubmitHandler<addSkuForm> = (addSkuData) => {
        console.info({addSkuData});
        cleanUpForm();
    }
    return (
        <>
            <Dialog 
                open={open}
                fullWidth={true}
                maxWidth={'lg'}
                sx={{
                    '& .MuiDialog-paper':{
                        height:'70wv',
                        maxHeight: '70wv',
                    }
                }}
            >
                <Typography variant='h6' sx={{
                    paddingBlock:'8px'
                    }} >
                    + Nuevo SKU
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
                                    type='number'
                                    {...register('peso')}
                                    error={!!errors.peso}
                                    helperText={errors.peso?.message}
                                    InputProps={{
                                        startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
                                    }}
                                />
                            </div>
                            <div className='erros-colums'>
                                <TextField
                                    label="Etiquetas"
                                    type='text'
                                    {...register('etiquetas')}
                                    error={!!errors.etiquetas}
                                    helperText={errors.etiquetas?.message}
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
                    <Button style={{backgroundColor: '#84888E'}} variant='contained' onClick={closingDialog}>Cancelar</Button>
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