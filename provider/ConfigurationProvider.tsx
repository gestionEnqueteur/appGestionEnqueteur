import { ReactNode, createContext, useState, useEffect } from "react";
import ConfigurationType from "../models/ConfigurationType";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  children: ReactNode;
};

// création du context
export const ConfigurationContext = createContext<any | null>(null);

export default function ConfigurationProvider(props: Props) {
  const [configuration, setConfiguration] = useState<ConfigurationType>({
    urlApi: "",
    invertigator: "",
  });

  const getConfiguration = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("configuration");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };



  useEffect(() => {
    // chargement de la configuration dans le context ConfigurationProvider
    try {
      getConfiguration().then((storedConfig: ConfigurationType) => {
        if (storedConfig !== null) setConfiguration(storedConfig);
      });

    } catch(e) {
      // ici on va gerer l'erreur en cas d'échec
      console.log("Echec du chargement de la configuration"); 
    }


  }, []);

  return (
    <ConfigurationContext.Provider value={{ configuration, setConfiguration }}>
      {props.children}
    </ConfigurationContext.Provider>
  );
}
