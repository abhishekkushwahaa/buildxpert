import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
type Props = {
  children: React.ReactNode;
};

const BlurPage = ({ children }: Props) => {
  return (
    <ScrollArea className="h-screen w-full rounded-md border">
      <div
        className="min-h-full backdrop-blur-[35px] dark:bg-muted/40 bg-muted/40 dark:shadow-2xl dark:shadow-black mx-auto pt-20 p-4 md:ml-[50px] lg:ml-[50px] top-0 right-0 left-0 bottom-0 z-[11]"
        id="blur-page"
      >
        {children}
      </div>
    </ScrollArea>
  );
};

export default BlurPage;
