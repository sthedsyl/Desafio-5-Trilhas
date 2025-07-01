import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DeleteDialog = () => {

  const handleDelete = () => {
    // Implement the delete logic here
    console.log("Artigo deletado");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash2 className="size-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você tem certeza que quer deletar esse artigo?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso irá deletar permanentemente
            seu artigo e remover seus dados de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-primary/5 hover:text-black">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/80"
            onClick={handleDelete}
          >
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
