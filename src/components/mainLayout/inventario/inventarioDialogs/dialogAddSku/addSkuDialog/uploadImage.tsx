//React
import * as React from 'react';
//import Material UI
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button } from '@mui/material';

//Exporting error Boolean


import './uploadImage.css'

const ImageUpload = () => {
    
    const [image, setImage] = React.useState<File|null>(null);
    const [weight, setWeight] = React.useState<boolean>(true)
    const [loading, setLoading] = React.useState<boolean>(false);
    const [button, setButton] = React.useState<boolean>(true);
    const [error, setError] = React.useState<boolean>(false);
    const [imageName, setImageName] =React.useState<string>();
    const [disable, setDisable] = React.useState<boolean>(true)
    const [icon, setIcon] = React.useState<boolean>(true)
    //export boolean


    const space = 'Seleccionar';

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(file){
            setImage(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            setImageName(file.name)
            setError(true);
            const weightImg = file.size/1024;
            Math.ceil(weightImg);
            const mbImage = weightImg/1024;
            const fileExtension = /.(jpg|jpeg|png)$/i

            if(mbImage > 2 || !fileExtension.test(file.name) ){
                setWeight(false);
                setButton(false);
                setError(true);
            }
            else{
                setError(true);
                setWeight(true);
                setButton(true);
            }
        }
    }
    const handleUpload = () => {
        setButton(false)
        setDisable(false)

        if(image) {
            setLoading(true)
            setTimeout(()=>{
                setIcon(false)
                setLoading(false)
            },1000)
            console.info(image)
        }else{
            setButton(true)
            setDisable(true)

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
                    disabled={!button && !disable}
                    style={{
                        fontWeight:'bold'
                    }}
                >
                    <svg className="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                        <span style={{marginLeft:'4px'}}>{space}</span> 
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
                    startIcon={!icon ? <CheckCircleOutlineIcon/>: <CloudUploadIcon/>}
                    loading={loading}
                    disabled={!button}
                    > <span>{button ? 'Subir Imagen':'Imagen OK'}</span>
                </LoadingButton>
            </div>

            {
                weight ? 
                <p 
                    className={error?'allowed':'disallowed'} 
                    style={{color:'green', marginTop:'10px'}}>
                    {`${imageName} - Imagen OK`}
                </p>
                :
                <p  className={error?'allowed':'disallowed'} 
                    style={{color:'red', marginTop:'10px'}}>

                    {`${imageName} - Imagen no Permitida`}
                </p>
            }
            <p 
                style={{
                        marginTop:'10px', 
                        color:'grey', 
                        fontStyle:'italic',
                        fontWeight:'bold'
                        }}>
                    Imagen Menor a 2 MB. Archivos permitidos jpg, jpeg, png
            </p>
        </>
    )
}

export default ImageUpload