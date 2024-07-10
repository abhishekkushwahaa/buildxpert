import React from "react";

type Props = {
  children: React.ReactNode;
};

const BlurPage = ({ children }: Props) => {
  return (
    <div
      className="h-screen backdrop-blur-[35px] dark:bg-muted/40 bg-muted/40 dark:shadow-2xl dark:shadow-black  mx-auto pt-20 p-4 md:ml-[50px] lg:ml-[50px] top-0 right-0 left-0 botton-0 z-[11]"
      id="blur-page"
    >
      {children}
    </div>
  );
};

export default BlurPage;
