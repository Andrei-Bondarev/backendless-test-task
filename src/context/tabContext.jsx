import React from "react";

import Data from "../tabs.json";

export const TabContext = React.createContext(null);


const TabProvider = ({ children }) => {
  const [tabs] = React.useState(Data.tabs);
  return <TabContext.Provider value={tabs}>{children}</TabContext.Provider>;
};
export default TabProvider;
