import React from "react";
import * as VscIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa6";
const IconComponent = ({ iconKey }: { iconKey: string }) => {
  const IconComponent =
    VscIcons[iconKey as keyof typeof VscIcons] ||
    FaIcons[iconKey as keyof typeof FaIcons];
  return <IconComponent />;
};

export default IconComponent;
