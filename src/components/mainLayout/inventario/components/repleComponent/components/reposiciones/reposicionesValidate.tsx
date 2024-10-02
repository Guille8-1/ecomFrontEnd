import { FieldError, Resolver } from "react-hook-form";
import { repoType } from "./resposicionesType";

const validateRepo: Resolver<repoType> = async (values) => {
    const errors: Record<string, FieldError> = {}
    if(!values.proveedor){
        errors.proveedor = {
            type:'required',
            message:'proveedor requerido'
        }
    }
    if(values.date){
        errors.date = {
            type:'required',
            message:'Fecha Necesaria'
        }
    }
    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors
    }
}

export default validateRepo