import { theme } from "@/constants/Colors";
import { Product } from "@/lib/interface";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * RecyclableProductTile
 * @param {Product} product
 * @returns {JSX.Element} TouchableOpacity
 */
export default function RecyclableProductTile({
  product,
  handleRecycleProduct,
}: {
  product: Product;
  handleRecycleProduct: any;
}): JSX.Element {
  const handleProductClick = () => {
    if (product) {
      handleRecycleProduct(product);
    }
  };

  return (
    <View style={styles.tileContainer}>
      <View>
        <View style={styles.tileInnerView}>
          <Text style={theme.text}>{product?.name}</Text>
          <Text style={theme.textSubtext}>{product?.barcode}</Text>
        </View>

        <ProductInnerContent
          product={product}
          handleProductClick={handleProductClick}
        />
      </View>
    </View>
  );
}

/**
 * ProductInnerContent
 * @param {any} product
 * @returns {JSX.Element} TouchableOpacity
 */
function ProductInnerContent({
  product,
  handleProductClick,
}: {
  product: Product;
  handleProductClick: any;
}): JSX.Element {
  return (
    <View style={styles.innerContentView}>
      <View style={styles.innerTextView}>
        <Ionicons name="alert-circle-outline" size={40} color="#004953" />
        {/* TODO: Replace alert with some reference item */}
        <View>
          <Text style={theme.textDark}>{product?.type}</Text>
          <Text style={theme.textSubtextDark}>{product?.material}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleProductClick}>
        <Ionicons name="md-checkbox-outline" size={40} color="#004953" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    backgroundColor: "#3a8977",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  tileInnerView: {
    marginLeft: 10,
    marginRight: 10,
  },
  innerContentView: {
    backgroundColor: "#d6ede6",
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  innerTextView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
