import { useState } from "react";
import { Menu, IconButton } from "react-native-paper";

type Props = {
  goToSuppresion: Function;
  goToInfoTrain: Function;
  goToRetard: Function;
  goToDescentStation: Function;
};

export default function MenuBurger(props: Props) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  //function button
  function openModalSuppressionTrain() {
    closeMenu();
    props.goToSuppresion();
  }

  function openModalInfoTrain() {
    closeMenu();
    props.goToInfoTrain();
  }

  function openModalRetardTrain() {
    closeMenu();
    props.goToRetard();
  }

  function openModalGareDescente() {
    closeMenu();
    props.goToDescentStation();
  }

  const buttom = (
    <IconButton
      mode="contained-tonal"
      icon="dots-vertical"
      onPress={openMenu}
    />
  );

  return (
    <Menu visible={visible} anchor={buttom} onDismiss={closeMenu}>
      <Menu.Item
        leadingIcon="delete"
        onPress={openModalSuppressionTrain}
        title="Train supprimer"
      />
      <Menu.Item
        leadingIcon="train-car-passenger-variant"
        onPress={openModalInfoTrain}
        title="Info train"
      />
      <Menu.Item
        leadingIcon="transit-transfer"
        onPress={openModalGareDescente}
        title="gare de descente"
      />
      <Menu.Item
        leadingIcon="clock"
        onPress={openModalRetardTrain}
        title="Retard"
      />
    </Menu>
  );
}
