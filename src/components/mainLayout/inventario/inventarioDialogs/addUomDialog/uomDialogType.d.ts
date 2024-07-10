export interface uomType {
    skuData?: {
        skuName: string
        currentQty: number
        expDate:string
        proveedor:string
        costo:number
        precio:number
    }
    open: boolean;
    closingDialog: () => void;
}

export interface uomTypeForm {
    skuName: string
    currentQty: number
    expDate:string
    proveedor:string
    costo:number
    precio:number
    //detalles del UOM
    uomName:string
    uomUnitFactor:number
    packageType:string
    descripcion:string
}