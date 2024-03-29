import { supabase } from "@/config/supabase";
import { theme } from "@/constants/Colors";
import { Product } from "@/lib/interface";
import { fetchProductHistory } from "@/store/DataStore";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Moment from "moment";

export default function home() {
  const [productArray, setProductArray] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, [productArray]);

  const getProducts = async () => {
    const products = await fetchProductHistory();
    if (products) {
      setProductArray(products);
    }
  };

  return (
    <ScrollView>
      {productArray.map((product) => (
        <HistoryItemTile key={product?.barcode} product={product} />
      ))}
    </ScrollView>
  );
}

function HistoryItemTile({ product }: { product: Product }) {
  return (
    <View style={styles.tileContainer}>
      <View style={styles.tileInnerView}>
        <Ionicons name="trash" size={30} color="#004953" />
        <View style={styles.tileInnerViewText}>
          <Text style={theme.textDark}>{product?.type}</Text>
          <Text style={theme.textSubtextDark}>{product?.material}</Text>
          <Text style={{ color: "#894160", fontFamily: "PrimaryFont" }}>
            {Moment(product?.created_at).calendar()}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    backgroundColor: "#d7e9e4",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  tileInnerView: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  tileInnerViewText: {},
});
