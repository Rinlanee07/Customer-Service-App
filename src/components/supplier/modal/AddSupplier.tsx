"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { postSupplier } from "@/lib/axios";
import { CategoryData } from "@/datatype/fetch.datatype";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { CreateSupplier } from "@/datatype/post.datatype";

const formSchema = z.object({
  companyName: z.string().min(1, {
    message: "Company Name field is required",
  }),
  categoryId: z.string().optional(),
  address: z.string().optional(),
  contactName: z.string().min(1, {
    message: "Contact Name field is required",
  }),
  contactTel: z.string().min(1, {
    message: "Contact Tel field is required",
  }),
  contactEmail: z.string().min(1, {
    message: "Contact Email field is required",
  }),
  status: z.boolean(),
});

interface CategoryType {
  dataCategory: CategoryData[];
  isLoadCategory: boolean;
}

export function AddSupplier({ dataCategory, isLoadCategory }: CategoryType) {
  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      address: "",
      contactName: "",
      contactTel: "",
      contactEmail: "",
      status: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (format: CreateSupplier) => postSupplier(format),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["supplierData"] });
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
    console.log(values);

    try {
      const format = {
        ...values,
        status: values.status ? "Active" : "Inactive",
        categoryId: +values.categoryId,
      };

      await mutation.mutateAsync(format); // Call the mutation function instead of sending data directly
    } catch (error) {
      console.error("Error adding supplier:", error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button className="font-lexend bg-cyan-500 shadow-md shadow-cyan-500/50 hover:bg-cyan-600">
          Add Supplier
        </Button>
      </DialogTrigger>

      <DialogContent  className="h-[35rem] overflow-auto">
        <DialogHeader>
          <DialogTitle className="light:invert">New Supplier</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="z-[999]">
                        <SelectGroup>
                          {!isLoadCategory &&
                            dataCategory.map((category: CategoryData) => (
                              <SelectItem
                                key={category.id}
                                value={category.id.toString()}
                              >
                                {category.name}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactTel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Tel *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contract Email *</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Active</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="ml-2 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
                    />
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
