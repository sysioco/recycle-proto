import { theme } from "@/constants/Colors";
import { products } from "@/lib/products";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RecycleModal() {
  return (
    <ScrollView>
      {products.map((product) => (
        <ProductTile key={product.barcode} product={product} />
      ))}
    </ScrollView>
  );
}

function ProductTile({ product }: { product: any }) {
  return (
    <View style={styles.tileContainer}>
      <View>
        <View style={styles.tileInnerView}>
          <Text style={theme.text}>{product.product_name}</Text>
          <Text style={theme.textSubtext}>{product.barcode}</Text>
        </View>

        <ProductInnerContent product={product} />
      </View>
    </View>
  );
}

function ProductInnerContent({ product }: { product: any }) {
  const handleProductRecycle = () => {
    console.log("Recycled product: ", product);
  };
  return (
    <View style={styles.innerContentView}>
      <View style={styles.innerTextView}>
        <Ionicons name="alert-circle-outline" size={40} color="#004953" />
        {/* TODO: Replace alert with some reference item */}
        <View>
          <Text style={theme.textDark}>{product.product_type}</Text>
          <Text style={theme.textSubtextDark}>{product.product_material}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleProductRecycle}>
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
