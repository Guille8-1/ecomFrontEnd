
import { Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import { addProductsProps } from "../../inventoryTypes/addProductTypes/addProducts";

export default function AddProductsDialog (props:addProductsProps) {
    const {open, closingDialog} = props;

    const savindata = () => {
        console.info('saving Data')
        closingDialog();
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
                        Subir Productos Mediante Archivo CSV
                </Typography>
                <DialogContent dividers>
                    <p>Hello form this dialog to upload a CSV file</p>
                </DialogContent>
                <DialogActions>
                    <Button color="error" variant="contained" onClick={closingDialog}>Cancelar</Button>
                    <Button variant="contained" onClick={savindata}>Guardar</Button>
                </DialogActions>
            </Dialog>
        </>
    )


}