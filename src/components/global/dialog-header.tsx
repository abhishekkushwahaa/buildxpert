import React from "react";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";

interface DialogHeaderProps {
  title: string;
  subheading: string;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ title, subheading }) => (
  <div className="pt-8 text-left">
    <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
    <DialogDescription>{subheading}</DialogDescription>
  </div>
);

export default DialogHeader;
