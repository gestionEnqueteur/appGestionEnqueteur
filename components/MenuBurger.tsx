import { useState } from "react";
import { Menu, IconButton } from "react-native-paper";

export default function MenuBurger() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  //function button
  function openModalSuppressionTrain() {
    closeMenu();
    // TODO à implémenter
    console.log("ouverture modal suppresion train");
  }

  function openModalInfoTrain() {
    closeMenu();
    // TODO à implémnter
    console.log("ouverture modal info train");
  }

  function openModalRetardTrain() {
    closeMenu();
    // TODO à implémnter
    console.log("ouverture modal retard du train");
  }

  function openModalGareDescente() {
    closeMenu();
    // TODO à implémenter
    console.log("ouverture modal gare de descente");
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
