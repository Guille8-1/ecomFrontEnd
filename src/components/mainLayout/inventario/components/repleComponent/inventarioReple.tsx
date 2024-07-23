import * as React from 'react'
import { Button } from "@mui/material"
import ReposicionesForm from './components/reposiciones/reposicionForm'
import './inventarioReple.css'

export const RepleInventario = () => {
    const [form, setForm] = React.useState<boolean>(false)
    const repleForm = () => {
        if(!form){
            setForm(true)
        } else {
            setForm(false)
        }
    }

    return (
        <>
            <div className="title-component">
                <h3>Inventario {'>'} Reposiciones</h3>
            </div>
            <section>
                <div className="action-buttons">
                    <Button
                        variant="contained"
                        role="button"
                        color="primary"
                        onClick={repleForm}
                    >+ Reposicion</Button>
                </div>
            </section>

            <div className='form-reposicion'>
                {
                    form ? 
                    <ReposicionesForm/>:
                    ''
                }
            </div>
        </>
    )
}