import * as React from 'react'
import { Box, Button, TextField } from '@mui/material'
import './reposicionForm.css'
//imports calendar fucntions
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs,{Dayjs} from 'dayjs';
//import forms
import { SubmitHandler, useForm } from 'react-hook-form';
import { repoType } from './resposicionesType';
import validateRepo from './reposicionesValidate';

export default function ReposicionesForm () {
    
    const [select, setSelect] = React.useState<Dayjs|null>(dayjs());
    
    //form functions
    const {handleSubmit,register, formState:{errors}} = useForm<repoType>({resolver:validateRepo})    


    //form functions
    
    const onSubmit:SubmitHandler<repoType> = (repoData) => {
        const pickedDate = select?.format('MM/DD/YYYY')
        repoData.date = pickedDate;

        if(repoData.date === 'Invalid Date'){
            alert('Fecha No Valida')
            return
        }

        console.info(repoData);
        console.info(typeof repoData.proveedor);
    }


    return(
        <>
            <div className='reposicion-form'>
                <Box>
                        <form action="">
                            <fieldset style={{
                                display:'flex',
                                flexDirection:'column'
                                    }}>
                                <legend><h3>Crear Nueva Reposicion</h3></legend>
                                        <div style={{
                                                        padding:'20px',
                                                        display:'flex',
                                                        flexDirection:'row',
                                                        gap:'10px'
                                                    }}>
                                            <TextField
                                                label='Cantidad De SKU'
                                                type='number'
                                                {...register('proveedor')}
                                                error={!!errors.proveedor}
                                                helperText={errors.proveedor?.message}
                                            />
                                        </div>
                                        <div style={{padding:'20px'}}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                        label='Fecha'
                                                        minDate={dayjs()}
                                                        slotProps={{
                                                            actionBar:{
                                                                actions: ['clear']
                                                            },
                                                        }}
                                                        onChange={(newValue)=>setSelect(newValue)}
                                                        value={select}
                                                />
                                            </LocalizationProvider>
                                        </div>
                            </fieldset> 
                        </form>
                </Box>
                <div style={{paddingTop:'20px'}}>
                    <Button color='primary' variant='contained' onClick={handleSubmit(onSubmit)}>
                        Registrar
                    </Button>
                </div>
            </div>
        </>
    )
}