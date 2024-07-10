export type ProductType = {
    id:number;
    sku:string;
    upc:number;
    cantidadDisp:number;
    udm:boolean | string;
    costo:number;
    precio:number;
    proveedor:string;
    marca:string;
    descripcion:string;
    peso:number;
    fechaExp:string;
    descontinuado:string | boolean;
}