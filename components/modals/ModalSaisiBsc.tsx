import React from "react";
import { View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import styles from "./ModalStyle";
import SupressionTrain from "./SupressionTrain";
import RetardTrain from "./RetardTrain";
//import InfoTrain from "./InfoTrain";
import GareDeDescente from "./GareDeDescente";

type props = {
  visible: boolean;
  select: string;
};

export default function ModalSaisiBsc(props: props) {
  const { visible, select } = props;

  return
  <Portal>
    <Modal visible={visible}>
      <View style={styles.modalContainer}>
        {select === "supression" && (
          <SupressionTrain />
        )}
        {select === "retard" && <RetardTrain />}
        {/*select === "info" && <InfoTrain/>*/}
        {select === "descent" && <GareDeDescente />}
      </View>
    </Modal>
  </Portal>
              
    
  ;
}


