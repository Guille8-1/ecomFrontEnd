//import * as React from 'react';

//react-hook-form functions
import { useForm, Resolver, SubmitHandler } from 'react-hook-form';
//material UI functions
import { 
            Dialog,
            Button,
            Box,
            TextField,
            DialogActions,
            DialogContent,
            Typography,
        } from '@mui/material';
//import CloudUploadIcon from '@mui/icons-material/CloudUpload';
//Interfaces para las funciones y formularios del Dialog        
import { addSkuProps } from '../../inventoryTypes/inventoryTypes';
import { addSkuForm, FieldError } from '../../inventoryTypes/addSkuForm';

// import DialogForm from './dialogContet'

//CSS para los HTML tags
import './dialogAddSku.css'




const validateResolver: Resolver<addSkuForm> = async (values) => {
    
    const errors: Record<string, FieldError> = {};

    if (!values.sku) {
        errors.sku = {
          type: "required",
          message: "This is required.",
        };
      } else {
        if (values.sku.length < 8) {
          errors.sku = {
            type: "minLength",
            message: "SKU especifico",
          };
        } else if (!/^[A-Za-z]+$/.test(values.sku)) {
          errors.sku = {
            type: "pattern",
            message: "no espacios",
          };
        }
      }

    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors,
    };
}


//componenet principal del dialogo para crear un nuevo SKU
export default function SkuAddDialog (props: addSkuProps) {
    const { open, closingDialog } = props;

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];
    //     if (file) {
    //       console.info('Selected file:', file);
    //     }
    //   };

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
                                height: '100px'
                            }}
                    >
                        <div className='first-section'>
                            {/*SKU controller */}
                            <div className='erros-colums'>
                                <TextField 
                                    label="sku"
                                    {...register('sku')}
                                    error={!!errors.sku}
                                    helperText={errors.sku?.message}
                                />
                            </div>
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