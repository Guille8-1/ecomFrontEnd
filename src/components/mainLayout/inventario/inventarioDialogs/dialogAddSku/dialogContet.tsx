// //react-hook-form functions
// import { useForm, SubmitHandler } from 'react-hook-form';

// //Interfaces para las funciones y formularios del Dialog        
// import { addSkuProps } from '../../inventoryTypes/inventoryTypes';
// import { addSkuForm } from '../../inventoryTypes/addSkuForm';


// const {register, handleSubmit} = useForm<addSkuForm>({
//     defaultValues: {
//         sku: '',
//         upc: 0,
//         costo: 0,
//         descripcion:'',
//         precio: 0,
//         proveedor: '',
//         peso: 0,
//         tags: ''
//     }
// });
// const onSubmit:SubmitHandler<addSkuForm> = (addSkuData) => {
//     console.info({addSkuData});
// }

// const DialogForm = () => {
//     return (
//         <>
//             <form action="">
//                 <input type="text" />
//             </form>
//         </>
//     )
// };

// export default DialogForm