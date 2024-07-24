import { FieldError, Resolver } from "react-hook-form";
import { repoType } from "./resposicionesType";

const validateRepo: Resolver<repoType> = async (values) => {
    const errors: Record<string, FieldError> = {}
    if(values.date){
        errors.date = {
            type:'required',
            message:'Fecha Necesaria'
        }
    }
    if(!values.proveedor){
        errors.nuevaCantidad = {
            type:'required',
            message:'proveedor requerido'
        }
    }
    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors
    }
}

export default validateRepo