import { Product } from "@/lib/interface";
import { create } from "zustand";

/**
 * Recycle Store
 * Handles the scanning data, allowing it to persist within the application until it is moved to DataStore
 * 
 */

export interface RecycleState {
  products: Array<Product>;
  items: number;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearProducts: () => void;
}

const useRecycleStore = create<RecycleState>((set) => ({
  products: [],
  items: 0,
  addProduct: (product: Product) =>
    set((state) => {

      const hasProduct = state.products.find(
        (p) => p.barcode === product.barcode
      );



      if (hasProduct) {
        console.log("hasProduct");

        return {
          products: state.products.map((p) => {
            if (p.barcode === product.barcode) {
              return { ...p };
            }
            return p;
          }),
        };
      } else {
        state.items += 1;
        return {
          products: [...state.products, { ...product }],
        };
      }
    }),

  reduceProduct: (product: Product) =>
    set((state) => {
      const newProductArray = state.products.filter(
        (item) => item.barcode !== product.barcode
      );

      return {
        products: newProductArray,
        items: state.items - 1,
      };
    }),

  clearProducts: () =>
    set((state) => {
      return {
        products: [],
        items: 0,
      };
    }),
}));

export default useRecycleStore;
