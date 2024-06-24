import * as React from 'react';

//react-hook-form functions
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
//material UI functions
import { 
            Dialog,
            Button,
            DialogActions,
            DialogContent,
            Box,
            Typography,
            TextField,
            InputAdornment,
        } from '@mui/material';
import { styled } from '@mui/material/styles';
//Interfaces para las funciones y formularios del Dialog        
import { addSkuProps } from '../../inventoryTypes/inventoryTypes';
import { addSkuForm } from '../../inventoryTypes/addSkuForm';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

//CSS para los HTML tags
import './dialogAddSku.css' 
const StyledTextField = styled(TextField)<{}>`
  margin: 10px
`;

//componenet principal del dialogo para crear un nuevo SKU
export default function SkuAddDialog (props: addSkuProps) {
    const { open, closingDialog } = props

    const {control, handleSubmit, formState:{errors}} = useForm<addSkuForm>({
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