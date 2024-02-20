export interface Product {
  barcode: string;
  name: string;
  type: string;
  material: string;
  recyclable: boolean;
  created_at: Date;
}

export interface RecycledProduct extends Product {
  recycledAt: Date;
}
