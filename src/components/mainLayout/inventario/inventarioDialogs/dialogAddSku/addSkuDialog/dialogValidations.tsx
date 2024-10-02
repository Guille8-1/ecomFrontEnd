import { FieldError, Resolver } from "react-hook-form";
import { addSkuForm } from "../../../inventoryTypes/addSkuTypes/addSkuForm";


const validateResolver: Resolver<addSkuForm> = async (values) => {
    
    const errors: Record<string, FieldError> = {};

    if (!values.sku) {
        errors.sku = {
          type: "required",
          message: "SKU es requerido",
        };
      } else {
        if (values.sku.length < 8) {
          errors.sku = {
            type: "minLength",
            message: "SKU especifico",
          };
        } else if (!/^[A-Za-z0-9]+$/.test(values.sku)) {
          errors.sku = {
            type: "pattern",
            message: "No espacios",
          };
        }
      }
      const str:string = values.upc.toString()
      if(values.upc > 999999999999999999n){
        errors.upc = {
            type:'maxLength',
            message: 'UPC no valido'
        }
      } else if(!/^[0-9]+$/.test(str)){
        errors.upc = {
            type: 'pattern',
            message: 'No caracteres'
        }
      }
      const costo:string = values.costo.toString()
      if(!values.costo){
        errors.costo = {
            type: 'required',
            message:'Costo requerido'
        }

      }else if(!/^[0-9]+$/.test(costo)) {
        errors.costo={
            type:'pattern',
            message:'No caracteres'
        }
      }
      const precio:string = values.costo.toString()
      if(!values.precio){
        errors.precio = {
            type: 'required',
            message:'Precio requerido'
        }

      } else if(!/^[0-9]+$/.test(precio)) {
        errors.precio={
            type:'pattern',
            message:'No caracteres'
        }
      }
      if(!values.descripcion){
        errors.descripcion = {
            type: 'required',
            message:'Descripcion Requerida'
        }
      } else if(values.descripcion.length < 10){
        errors.descripcion = {
            type: 'minLength',
            message:'Descripcion especifica'
        }
      }
      const itemPeso:string = values.peso.toString()
      if(!/^[0-9]+$/.test(itemPeso)) {
        errors.peso={
            type:'pattern',
            message:'No caracteres'
        }
      }
      if(values.proveedor.length < 5){
            errors.proveedor ={
                type: 'minLength',
                message:'Proveedor Invalido'
            }
      }
      if(!/^[a-zA-Z\s]*$/.test(values.etiquetas)){
          errors.etiquetas = {
            type:'pattern',
            message:'No caracteres especiales'
          }
      }
    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors,
    };
}

export default validateResolver