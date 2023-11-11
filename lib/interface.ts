export interface Product {
  barcode: string;
  name: string;
  type: string;
  material: string;
  recyclable: boolean;
}

export interface RecycledProduct extends Product {
  recycledAt: Date;
}
