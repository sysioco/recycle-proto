import { supabase } from "@/config/supabase";
import { Product } from "@/lib/interface";
import { create } from "zustand";

// TODO: Replace with data base

export interface DataStoreStateProps {
  data: Array<Product>;
  volume: number;
  addData: (product: Product) => void;
  fetchData: () => void;
}

/**
 * fetchProductHistory
 * Fetches a list of products from the database
 * @returns {Array} List of scanned products
 */
export async function fetchProductHistory() {
  try {
    const { data } = await supabase.from("product_history").select("*");
    return data
  } catch (error) {
    console.error(error);
  }
}

export async function addProductHistory(product: Product) {
  try {
    // check database for the barcode
    const { data } = await supabase.from("product_history").select("id").ilike('barcode', product.barcode);

    if (data && data.length) {
      console.log(data);
      return { message: 'Removing. You have already added that product.', recycled: false }
    }

    await supabase
      .from('product_history')
      .insert(product);

    return { message: "You have successfully recycled that product.", recycled: true }



  } catch (error) {
    console.error(error);
  }
}

