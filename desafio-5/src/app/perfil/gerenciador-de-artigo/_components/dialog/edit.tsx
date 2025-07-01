import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { EditForm } from "./edit-form";

const EditDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} size="icon">
          <Pencil className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Artigo</DialogTitle>
          <DialogDescription>
            Faça alterações no seu artigo abaixo.
          </DialogDescription>
        </DialogHeader>
        <EditForm />
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
