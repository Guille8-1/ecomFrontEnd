import { FieldError, Resolver } from "react-hook-form";
import { uomTypeForm } from "./uomDialogType";

const uomValidate: Resolver<uomTypeForm> = async (values) =>{
    const errors: Record<string, FieldError> = {};

    if(!values.uomName){
        errors.uomName = {
            type: 'required',
            message: 'UDM Requerido'
        }
    }else if(values.uomName.length > 20) {
        errors.uomName = {
            type: 'minLength',
            message:'UOM Invalido'
        }
    }

    if(!values.uomUnitFactor){
        errors.uomUnitFactor = {
            type:'required',
            message:'Unidad de Medida Reuqerida'
        }
    }
    if(!/^[a-zA-Z\s]*$/.test(values.descripcion)){
        errors.descripcion = {
            type: 'pattern',
            message: 'No Caracteres Especiales'
        }
    } else if(values.descripcion.length < 12) {
        errors.descripcion = {
            type: 'minLength',
            message:'descripcion especifica'
        }
    }
    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors
    }
}

export default uomValidate;