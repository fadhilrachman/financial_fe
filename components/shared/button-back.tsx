import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const ButtonBack = ({
  className,
  route,
}: {
  className?: string;
  route: string;
}) => {
  const router = useRouter();
  return (
    <Button
      className={className}
      icon={<IoIosArrowBack />}
      shape="circle"
      onClick={() => {
        router.push(route);
        // handleBack();
        //   handleRoute("/");
      }}
      size="middle"
    />
  );
};

export default ButtonBack;
