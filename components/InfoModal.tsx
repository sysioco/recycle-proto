import { ReactElement } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

export default function InfoModal({
  showModal,
  modalTitle,
  children,
}: {
  showModal: boolean;
  modalTitle: string;
  children: ReactElement;
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{modalTitle}</Text>
        </View>
        <View style={styles.childrenContent}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",

    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    backgroundColor: "blue",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "#fff",
    fontFamily: "SpaceMono",
  },
  childrenContent: {
    padding: 15,
  },
});
