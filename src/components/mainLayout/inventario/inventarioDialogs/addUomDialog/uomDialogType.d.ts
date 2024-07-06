export interface uomType {
    skuData?: {
        skuName: string
        currentQty: number
        expDate:string
    }
    open: boolean;
    closingDialog: () => void;
}