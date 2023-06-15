import { ReactNode, createContext, useState } from "react";
import ConfigurationType from "../models/ConfigurationType";

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

  return (
    <ConfigurationContext.Provider value={{ configuration, setConfiguration }}>
      {props.children}
    </ConfigurationContext.Provider>
  );
}
