"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "@/components/ui/switch";

import { Textarea } from "@/components/ui/textarea";
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
} from "@/components/ui/dialog"
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryData, SupplierData } from "@/datatype/fetch.datatype";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import cookie from 'cookiejs';
const formSchema = z.object({
  id: z.number(),
  companyName: z.string(),
  categoryId: z.string().optional(),
  address: z.string(),
  contactName: z.string(),
  contactTel: z.string(),
  contactEmail: z.string(),
  status: z.boolean(),
});

interface Action {
  inventory: SupplierData;
  dataCategory: CategoryData[];
  isLoadCategory: boolean;
}


export function EditSupplier({ inventory, dataCategory, isLoadCategory }: Action,) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const token = cookie.get('token');

  const form = useForm<z.infer<typeof formSchema>>
    ({
      resolver: zodResolver(formSchema),
      defaultValues: {
        id: inventory.id,
        companyName: inventory.companyName,
        categoryId: inventory.categoryId.toString() || "",
        address: inventory.address,
        contactName: inventory.contactName,
        contactTel: inventory.contactTel,
        contactEmail: inventory.contactEmail,
        status: inventory.status === "Active" ? true : false,
      },
    });


  const mutation = useMutation({
    mutationFn: (formData: SupplierData) => {
      return axios.patch(`${process.env.NEXT_PUBLIC_HOST}/api/supplier/${formData.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
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
    try {
      const format =
      {
        ...values,
        status: values.status ? "Active" : "Inactive",
        categoryId: +values.categoryId
      }
      await mutation.mutateAsync(format);
      console.log(format);

    } catch (error) {
      console.error("Error editing Category:", error);
      // Handle error, e.g., display error message to the user
    }
  }
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger>
        <Pencil2Icon />
      </DialogTrigger>
      <DialogContent className="h-[35rem] overflow-auto">
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
                    {dataCategory &&
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="z-[999]">
                          {
                            !isLoadCategory && (dataCategory.map((category: CategoryData) => (
                              <SelectItem
                                key={category.id}
                                value={category.id.toString()}
                              >
                                {category.name}
                              </SelectItem>
                            )))
                          }
                        </SelectContent>
                      </Select>
                    }
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
