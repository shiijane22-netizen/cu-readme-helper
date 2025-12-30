import React from "react";
import { useUIStore } from "@/store/uiStore";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

export const ConfirmationDialog: React.FC = () => {
  const { confirmation, closeConfirmation } = useUIStore();

  return (
    <Dialog open={confirmation.open} onOpenChange={(open) => !open && closeConfirmation()}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="text-primary text-xl">Thank You!</DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            {confirmation.message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={closeConfirmation} 
            className="bg-secondary text-primary hover:bg-secondary/90 font-heading uppercase"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
