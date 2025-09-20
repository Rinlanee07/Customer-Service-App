import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TriangleAlertIcon } from "lucide-react";
import cookie from 'cookiejs';

export function DeleteSupplier({ supplier, onClose, onDelete }: any) {
  const token = cookie.get('token');
  const mutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`${process.env.NEXT_PUBLIC_HOST}/api/supplier/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (data) => {
      onClose();
    },
    onError: (error) => {
      console.error("Error deleting supplier:", error);
      // Handle error, e.g., display error message to the user
    },
  });

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex justify-center items-center text-center">
          <TriangleAlertIcon className="justify-center text-yellow-500" size={72} />
          <DialogTitle className="text-3xl">Are you sure?</DialogTitle>
          <DialogDescription>You wont be able to revert this!</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={() => handleDelete(supplier.id)}
            type="submit"
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}