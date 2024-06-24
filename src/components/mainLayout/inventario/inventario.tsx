import * as React from 'react'
import DataTable from './dataTable'
import './inventario.css'
// Imports para los dialogs
import { 
            Button,
            CircularProgress,
            Box,
        } from '@mui/material'
import SkuAddDialog from './inventarioDialogs/dialogAddSku/dialogAddSku'

export default function Inventario() {
    
    const [open, setOpen] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);


    React.useEffect(() => {
        if(loading){
            const timeData = setTimeout(()=> setLoading(false), 500)
            return () => clearTimeout(timeData)
        }
    },[loading]);

    const dialogSKUOpen = () => {
        setOpen(true)
    }
    const dialogClose = () => {
        setOpen(false)
    }

    // const sendInfoValidate = () => {
    //     console.log('sendInfoValidate to server')
    // }

    return (
        <>
            <main>
                <div className="title-component">
                    <h3>
                        Inventario
                    </h3>
                </div>
                <section>
                    <div className="action-buttons">
                        <Button color='primary' variant='contained' role='Button' onClick={dialogSKUOpen}>
                            <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" d="M5 12h14m-7 7V5"/>
                            </svg>SKU
                        </Button>
                        {/* HTML para el dialog agregar SKU */}
                        <SkuAddDialog open={open} closingDialog={dialogClose}/>
                        <Button color='primary' variant='contained' role='Button'>
                            <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/>
                            </svg>Subir Productos
                        </Button>
                        <Button color='primary' variant='contained' role='Button'>
                            <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/>
                            </svg>Reposiciones
                        </Button>
                    </div>

                </section>
                <div className='tabla-inventario'>
                    {
                        loading ? 
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: '500px',
                            height: '100vh',
                            }}>
                            <CircularProgress color='info' />
                        </Box> 
                        :<DataTable/>
                    }
                </div>
            </main>
        </>
    )
}