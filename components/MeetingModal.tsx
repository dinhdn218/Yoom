import React, { ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        aria-describedby={undefined}
        className="flex w-full xl:max-w-[520px] md:max-w-[430px] max-w-[330px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white"
      >
        <DialogTitle></DialogTitle>
        <div className="flex flex-col gap-6">
          {image ? (
            <div className="flex justify-center">
              <Image src={image} alt="image" width={72} height={72} />
            </div>
          ) : null}

          <h1
            className={cn(
              "xl:text-3xl md:text-2xl text-xl font-bold leading-[42px]",
              className
            )}
          >
            {title}
          </h1>
          {children}
          <Button
            onClick={handleClick}
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            {buttonIcon ? (
              <Image
                src={buttonIcon}
                alt="button-icon"
                width={13}
                height={13}
              />
            ) : null}
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
