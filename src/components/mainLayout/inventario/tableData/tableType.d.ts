export interface tableType {
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
    descontinuado: boolean | string
    udm:boolean | string
}
