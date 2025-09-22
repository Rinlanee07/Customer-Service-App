"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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
import { WarehouseData } from "@/datatype/fetch.datatype";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { postWarehouse } from "@/lib/axios";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateWarehouseData } from "@/datatype/post.datatype";


export function AddWarehouse() {
  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const formSchema = z.object({
    organizationId: z.number().min(1),
    name: z.string().min(1, {
      message: "Warehouse Name field is required",
    }),
    location: z.string().min(1, {
      message: "Address / Location field is required",
    }),
    contactName: z.string().min(1, {
      message: "Contract Name field is required",
    }),
    contactEmail: z.string().min(1, {
      message: "Contract Email field is required",
    }),
    contactTel: z.string().min(1, {
      message: "Contract Tel field is required",
    }),
    branchId: z.number().optional(),
    receiveEmail: z.boolean().optional(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationId: 1,
      name: "",
      location: "",
      contactName: "",
      contactEmail: "",
      contactTel: "",
      branchId: 1,
      receiveEmail: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (format: CreateWarehouseData) => postWarehouse(format),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["warehouseData"] });
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
      await mutation.mutateAsync(values); // Call the mutation function instead of sending data directly
    } catch (error) {
      console.error("Error adding Warehouse:", error);
      // Handle error, e.g., display error message to the user
    }
  }
  return (

    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button className="font-lexend bg-cyan-500 shadow-md shadow-cyan-500/50 hover:bg-cyan-600">
          Add Warehouse
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[35rem] overflow-auto">
        <DialogHeader className="bg-gray-100">
          <DialogTitle className="light:invert">New Warehouse</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warehouse Name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address / Location *</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Contract Name *</FormLabel>
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
              name="contactTel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contract Tel *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2">
              {/* <div>
                <Label htmlFor="branch">Branch</Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="select">Select</SelectItem>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="shop2">Shop2</SelectItem>
                      <SelectItem value="shop3">Shop3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div> */}

              <FormField
                control={form.control}
                name="receiveEmail"
                render={({ field }) => (
                  <FormItem className="flex gap-2 items-center">
                    <Label htmlFor="receive_email">Receive Email</Label>
                    <FormControl>
                      <Switch id="receiveEmail" onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
