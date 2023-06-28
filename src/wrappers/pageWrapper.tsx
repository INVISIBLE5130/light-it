import React, { FC } from "react";

export const PageWrapper: FC<{
  children: React.ReactElement;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={`min-h-screen w-full ${className || ""}`}>{children}</div>
  );
};
