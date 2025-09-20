"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CategoryData, Fetch } from "@/datatype/fetch.datatype";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Pencil2Icon } from "@radix-ui/react-icons";
import cookie from "cookiejs";

interface Action {
  category: CategoryData;
}

export function EditCategory({ category }: Action) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const token = cookie.get('token');

  const formSchema = z.object({
    id: z.number(),
    name: z.string().min(1, {
      message: "Item Category name field is required",
    }),
    description: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: category.id,
      name: category.name,
      description: category.description,
    },
  });

  const mutation = useMutation({
    mutationFn: (formData: Fetch) => {
      return axios.patch(
        `${process.env.NEXT_PUBLIC_HOST}/api/category/${formData.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categoryData"] });
      setOpen(false);
    },
    onError: (error) => {
      console.error("Error editing Category:", error);
      // Handle error, e.g., display error message to the user
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema> | any) {
    console.log(values);

    try {
      await mutation.mutateAsync(values); // Call the mutation function instead of sending data directly
    } catch (error) {
      console.error("Error editing Category:", error);
    }
  }
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger>
        <Pencil2Icon />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="bg-gray-100">
          <DialogTitle className="light:invert">Edit Category</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>

              <Button className="bg-sky-800" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
