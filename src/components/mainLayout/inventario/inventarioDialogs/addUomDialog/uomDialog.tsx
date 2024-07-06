import { Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import { uomType } from "./uomDialogType";

export default function DialogUom (props:uomType) {
    const {open, closingDialog, skuData} = props;
    const gettingSkuUOM = () =>{
        console.info('sku row to UOM')
    }
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
                    + Crear Unidad de Medida SKU: {skuData?.skuName}
                </Typography>
                <DialogContent dividers>
                    <h4>hello from the UOM dialog</h4>
                    <p>{skuData?.currentQty}</p>
                    <p>{skuData?.skuName}</p>
                    <p>{skuData?.expDate}</p>
                </DialogContent>
                <DialogActions>
                    <Button style={{backgroundColor: '#84888E'}} variant="contained" onClick={closingDialog}>
                        Cerrar
                    </Button>
                    <Button 
                        color="success" 
                        variant="contained"
                        onClick={gettingSkuUOM}
                        >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}