//sku type
export interface Producto {
    id:number;
    sku:string;
    upc:number;
    cantidadDisp:number;
    costo:number;
    precio:number;
    proveedor:string;
    etiquetas:string;
    descripcion:string;
    peso:number;
    fechaExp:string;
  }
//contact type
export interface Nombre {
    nombre: string;
    apellido: string;
    apodo:string;
}
export interface addSkuProps {
    open: boolean;
    closingDialog: () => void;
}
export interface FieldError {
    types?: {
      [key: string]: string;
    };
  }