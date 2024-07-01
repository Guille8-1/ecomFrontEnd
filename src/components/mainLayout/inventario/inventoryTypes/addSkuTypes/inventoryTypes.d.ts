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
  
//open / close fucntions

export interface addSkuProps {
    open: boolean;
    closingDialog: () => void;
}
