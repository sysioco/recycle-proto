import { Product } from "@/lib/interface";
import { create } from "zustand";

// TODO: Replace with data base

export interface DataStoreStateProps {
  data: Array<Product>;
  volume: number;
  addData: (product: Product) => void;
}

const useDataStore = create<DataStoreStateProps>((set) => ({
  data: [],
  volume: 0,
  addData: (product: Product) =>
    set((state) => {
      state.volume += 1;
      const hasProduct = state.data.find((p) => p.barcode === product.barcode);

      if (hasProduct) {
        return {
          data: state.data.map((p) => {
            if (p.barcode === product.barcode) {
              return { ...p };
            }
            return p;
          }),
        };
      } else {
        return {
          data: [...state.data, { ...product }],
        };
      }
    }),
}));

export default useDataStore;
