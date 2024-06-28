import * as React from 'react';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';

import './uploadImage.css'

const ImageUpload = () => {
    
    const [image, setImage] = React.useState<File|null>(null);
    const [weight, setWeight] = React.useState<boolean>(true)
    const [loading, setLoading] = React.useState<boolean>(false);
    const [button, setButton] = React.useState<boolean>(true);
    const [size, setSize] = React.useState<number>(0)
    const [error, setError] = React.useState<boolean>(false)
    
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if(file){
            setImage(file);
            const reader = new FileReader()
            reader.readAsDataURL(file)

            const weightImg = file.size/1024;
            Math.ceil(weightImg)
            
            if(weightImg > 1024){
                setWeight(false)
                setSize(Math.ceil(weightImg))
                setButton(false)
                setError(true)
            }else{
                setError(true)
                setWeight(true)
                setSize(Math.ceil(weightImg))
            }
        }
    }
    const handleUpload = () => {
        setButton(false)
        if(image) {
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)
            },1000)
            console.info(image)
        }
    }

    return (
        <>
            <div style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                gap:'10px'
            }}>
                <Button
                    variant='outlined'
                    component='label'
                    color='warning'
                    style={{
                        fontWeight:'bold'
                    }}
                >
                    Seleccionar Imagenes
                    <input
                            accept="image/*"
                            style={{display:'none'}}
                            id='image-upload'
                            type='file'
                            onChange={handleImageChange}
                    />
                </Button>
                <LoadingButton
                    color={'primary'}
                    variant='contained'
                    onClick={handleUpload}
                    startIcon={!loading ? <CloudUploadIcon/>:<CheckCircleOutlineIcon/>}
                    loading={loading}
                    disabled={!button}
                    > <span>{!button ? 'Imagen OK':'Subir Imagen'}</span>
                </LoadingButton>
            </div>

            {
                weight ? 
                <p className={error?'allowed':'disallowed'} style={{color:'green', marginTop:'7px'}}>{`Peso ${size} Kb permitido`}</p>
                :
                <p className={error?'allowed':'disallowed'} style={{color:'red', marginTop:'7px'}}>{`Peso ${size} Kb no permitido`}</p>
            }
        </>
    )
}

export default ImageUpload