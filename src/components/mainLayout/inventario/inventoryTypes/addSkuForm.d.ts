export interface addSkuForm {
    sku: string;
    upc: number,
    descripcion: string,
    costo: number,
    precio: number,
    proveedor: string,
    peso: number,
    tags: string;
}

export interface FieldError {
    type?: string;
    message?: string;
}