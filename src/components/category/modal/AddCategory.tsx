"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { postCategory } from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";
import { CreateCategory } from "@/datatype/post.datatype";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Category Name field is required",
  }),
  description: z.string(),
  organizationId: z.number()
});

export function AddCategory() {
  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      organizationId: 1
    },
  });

  const mutation = useMutation({
    mutationFn: (format: CreateCategory) => postCategory(format),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categoryData"] });
      setOpen(false);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema> | any) {

    try {
      await mutation.mutateAsync(values);
    } catch (error) {
      console.error("Error adding Category:", error);
    }
  }
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button className="font-lexend bg-cyan-500 shadow-md shadow-cyan-500/50 hover:bg-cyan-600">
          Add Item Category
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="bg-zinc-100">
          <DialogTitle className="light:invert text-stone-600">
            New Item Category
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel className="text-stone-700">
                    Category Name *
                  </FormLabel>
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
            <FormField
              control={form.control}
              name="organizationId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization ID * (assign to 1)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min={1} />
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
